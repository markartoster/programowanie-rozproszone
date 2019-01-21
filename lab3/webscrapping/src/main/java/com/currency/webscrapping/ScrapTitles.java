/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.currency.webscrapping;

import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

/**
 *
 * @author karolrosinski
 */
public class ScrapTitles implements Runnable{
    final Document document;
    
    public ScrapTitles(Document document){
        this.document = document;
    }
    
    @Override
    public void run() {
        for(Element row : this.document.select("table.chart.full-width tr")){
            
            final String title = row.select(".titleColumn a").text();

            System.out.println("title: " + title);
        }
    }
    
}
