package com.example.demo.wikipedia;

import com.example.demo.wikipedia.dto.WikipediaData;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("wikipedia")
public class WikipediaController {

    private final WikipediaService wikipediaService;

    public WikipediaController(WikipediaService wikipediaService) {
        this.wikipediaService = wikipediaService;
    }

    @GetMapping("/title/{title}")
    public List<WikipediaData> findByTitle(@PathVariable("title") final String title) {
        return wikipediaService.findByTitleRepository(title);
    }

    @GetMapping("/title2/{title}")
    public List<WikipediaData> findByTitleCustom(@PathVariable("title") final String title) {
        return wikipediaService.findByTitleCustom(title);
    }

    @GetMapping("/title3/{title}")
    public List<WikipediaData> findByTitleClient(@PathVariable("title") final String title) {
        return wikipediaService.findByTitleClient(title);
    }

    @GetMapping("/title4/{title}")
    public List<WikipediaData> findByTitleOperations(@PathVariable("title") final String title) {

        return wikipediaService.findByTitleOperations(title);
    }

    @GetMapping("/cocktail/{title}")
    public WikipediaData findCocktailInfo(@PathVariable("title") final String name) {
        WikipediaData result = wikipediaService.findByTitleOperations(name).getFirst();
        String title = result.title().toLowerCase();
        String openingText = result.opening_text();
        if (title.contains(name.toLowerCase())) {
            return result;
        } else {
            return null;
        }
    }
}
