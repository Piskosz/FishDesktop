package AplikacjaWedkarska.FishingApplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RejestracjaRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public int save2(List<Rejestration> rejestrations) {
        for (Rejestration rejestration : rejestrations) {
            if (getByEmail(rejestration.getMail()) != null) {
                throw new IllegalArgumentException("Email already exists: " + rejestration.getMail());
            }
            // Dodaj rekord do bazy
            jdbcTemplate.update(
                    "INSERT INTO RejestrationFish(Login, Password, Mail) VALUES(?,?,?)",
                    rejestration.getLogin(), rejestration.getPassword(), rejestration.getMail()
            );
        }
        return 1;
    }


    public Rejestration getByLogin(String login) {
        String sql = "SELECT * FROM RejestrationFish WHERE login = ? LIMIT 1";
        List<Rejestration> results = jdbcTemplate.query(
                sql,
                BeanPropertyRowMapper.newInstance(Rejestration.class),
                login
        );
        return results.isEmpty() ? null : results.get(0);
    }
    public Rejestration getByEmail(String email) {
        String sql = "SELECT * FROM RejestrationFish WHERE Mail = ? LIMIT 1";
        List<Rejestration> results = jdbcTemplate.query(
                sql,
                BeanPropertyRowMapper.newInstance(Rejestration.class),
                email
        );
        return results.isEmpty() ? null : results.get(0);
    }

    public int updatePasswordByEmail(String email, String newPassword) {
        String sql = "UPDATE RejestrationFish SET Password = ? WHERE Mail = ?";
        return jdbcTemplate.update(sql, newPassword, email);
    }

    public List<Rejestration> getAll_3() {
        return jdbcTemplate.query("SELECT * FROM RejestrationFish;", BeanPropertyRowMapper.newInstance(Rejestration.class));
    }
}
