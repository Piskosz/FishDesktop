package AplikacjaWedkarska.FishingApplication;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private RejestracjaRepository rejestracjaRepository;

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
    private static final String SECRET_KEY = "your_secret_key";

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginPassword loginRequest) {
        logger.info("Received login request for user: {}", loginRequest.getLogin());
        String login = loginRequest.getLogin();
        String haslo = loginRequest.getPassword();

        try {
            Rejestration user = rejestracjaRepository.getByLogin(login);

            if (user != null && user.getPassword().equals(haslo)) {
                String token = generateJwtToken(login);
                logger.info("User authenticated successfully: {}", login);

                return ResponseEntity.ok(new AuthResponse(token, (long) user.getId()));  // Zmienione
            } else {
                logger.warn("Authentication failed for user: {}", login);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Nieprawidłowy login lub hasło");
            }
        } catch (Exception e) {
            logger.error("Error during login process", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Wystąpił błąd podczas logowania. Spróbuj ponownie później.");
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordRequest resetRequest) {
        logger.info("Received password reset request for email: {}", resetRequest.getEmail());

        String email = resetRequest.getEmail();
        String newPassword = resetRequest.getNewPassword();

        try {
            Rejestration user = rejestracjaRepository.getByEmail(email);
            if (user != null) {
                rejestracjaRepository.updatePasswordByEmail(email, newPassword);
                logger.info("Password reset successfully for email: {}", email);
                return ResponseEntity.ok("Password has been reset successfully.");
            } else {
                logger.warn("User not found with email: {}", email);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
            }
        } catch (Exception e) {
            logger.error("Error during password reset process", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Password reset error. Please try again later.");
        }
    }

    private String generateJwtToken(String login) {
        long nowMillis = System.currentTimeMillis();
        Date now = new Date(nowMillis);

        return Jwts.builder()
                .setSubject(login)
                .setIssuedAt(now)
                .setExpiration(new Date(nowMillis + 1000 * 60 * 60 * 10))
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }

    public static class AuthResponse {
        private String token;
        private Long userId;

        public AuthResponse(String token, Long userId) {
            this.token = token;
            this.userId = userId;
        }

        public String getToken() {
            return token;
        }

        public Long getUserId() {
            return userId;
        }
    }
}
