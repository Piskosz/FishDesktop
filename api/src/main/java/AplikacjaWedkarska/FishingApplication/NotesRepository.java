package AplikacjaWedkarska.FishingApplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class NotesRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public int save(Note note) {
        return jdbcTemplate.update(
                "INSERT INTO Notes (user_id, content) VALUES (?, ?)",
                note.getUserId(), note.getContent()
        );
    }

    public List<Note> getByUserId(int userId) {
        return jdbcTemplate.query(
                "SELECT * FROM Notes WHERE user_id = ? ORDER BY created_at DESC",
                BeanPropertyRowMapper.newInstance(Note.class),
                userId
        );
    }

    public int delete(int id) {
        return jdbcTemplate.update("DELETE FROM Notes WHERE id = ?", id);
    }
}
