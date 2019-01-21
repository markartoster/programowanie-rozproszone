/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.currency.webscrapping;


import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;


/**
 *
 * @author karolrosinski
 */
public class Main {
    public static void main(String[] args) throws Exception {
        
        final Document document = Jsoup.connect("https://www.imdb.com/chart/top?ref_=nv_mv_250").get();
        
        
    /*
        W JEDNYM WĄTKU
    */
//        for(Element row : document.select("table.chart.full-width tr")){
//            
//            final String title = row.select(".titleColumn a").text();
//            final String rating = row.select(".imdbRating").text();
//            
//            System.out.println(title + " rating: " + rating);
//        }

    /*
        W DWÓCH WĄTKach
    */
        Runnable titlesRun = new ScrapTitles(document);
        Runnable ratingRun = new ScrapRatings(document);
        
        Thread titleThread = new Thread(titlesRun);
        Thread runThread = new Thread(ratingRun);
        
        titleThread.run();
        runThread.run();
    }
}
