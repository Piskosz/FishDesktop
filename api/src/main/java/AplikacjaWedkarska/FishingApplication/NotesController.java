package AplikacjaWedkarska.FishingApplication;
import org.springframework.http.ResponseEntity;
import java.util.Map;
import java.util.HashMap;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notes")
@CrossOrigin(origins = "http://localhost:3000")
public class NotesController {

    @Autowired
    private NotesRepository notesRepository;

    @PostMapping("/add")
    public ResponseEntity<Map<String, String>> addNote(@RequestBody Note note) {
        int rows = notesRepository.save(note);
        Map<String, String> response = new HashMap<>();
        if (rows > 0) {
            response.put("message", "Note added successfully");
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "Failed to add note");
            return ResponseEntity.badRequest().body(response);
        }
    }


    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Note>> getNotesByUser(@PathVariable int userId) {
        List<Note> notes = notesRepository.getByUserId(userId);
        return ResponseEntity.ok(notes);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteNote(@PathVariable int id) {
        int rows = notesRepository.delete(id);
        if (rows > 0) {
            return ResponseEntity.ok("Note deleted successfully");
        } else {
            return ResponseEntity.badRequest().body("Failed to delete note");
        }
    }
}
