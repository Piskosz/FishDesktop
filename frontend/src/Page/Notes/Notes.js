import React, { useState, useEffect } from 'react';
import './Notes.css';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchUserIdAndNotes = async () => {
      try {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
          setUserId(storedUserId);
          const response = await fetch(`http://172.28.16.1:8080/notes/user/${storedUserId}`);
          const data = await response.json();
          setNotes(data);
        }
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };
    fetchUserIdAndNotes();
  }, []);

  const addNote = async () => {
    if (noteText.trim()) {
      const newNote = { userId, content: noteText.trim() };
      try {
        const response = await fetch('http://172.28.16.1:8080/notes/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newNote),
        });

        if (response.ok) {
          const savedNote = await response.json();
          setNotes([savedNote, ...notes]);
          setNoteText('');
          refreshNotes();
        } else {
          const errorResponse = await response.json();
          console.error('Failed to add note:', errorResponse.message);
        }
      } catch (error) {
        console.error('Error adding note:', error);
      }
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await fetch(`http://172.28.16.1:8080/notes/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
      } else {
        const errorResponse = await response.json();
        console.error('Failed to delete note:', errorResponse.message);
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const refreshNotes = async () => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      try {
        const response = await fetch(`http://172.28.16.1:8080/notes/user/${storedUserId}`);
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error('Error refreshing notes:', error);
      }
    }
  };

  return (
    <div className="background">
      <div className="headerContainer">
        <p className="headerText">NOTATKI</p>
      </div>

      <div>
        {notes.map((item) => (
          <div key={item.id} className="noteItem">
            <p className="noteText">{item.content}</p>
            <button className="deleteButton" onClick={() => deleteNote(item.id)}>
              Usuń
            </button>
          </div>
        ))}
      </div>

      <div className="inputContainer">
        <input
          placeholder="Wpisz notatkę"
          className="input"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="addButton" onClick={addNote}>
          Dodaj
        </button>
      </div>
    </div>
  );
};

export default Notes;
