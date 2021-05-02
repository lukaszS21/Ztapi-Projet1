package com.example.biblioteka.controler;

import com.example.biblioteka.model.Books;


import com.example.biblioteka.repository.BookRepository;
import com.example.biblioteka.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import com.sun.istack.Nullable;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import java.util.ArrayList;
import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class AudioBooksC {
    private BookService books;
    private final BookRepository bookRepository;
    @Autowired
    public AudioBooksC(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/AudioBooks")
    public List<Books> getBooks(){
        List<Books> book = new ArrayList<>();
        bookRepository.findAll().forEach(book::add);
        return book;
    }
//    @GetMapping("/Audio")
//    public Optional<Books> getBookByID(@RequestParam int index){
//        return books.findByID(index);
//    }


}