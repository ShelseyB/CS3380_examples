import path from "path";
import {glob} from "glob";

function useStar() {
    const allFiles = glob.sync("*");
    console.log("allFiles: *", allFiles);

    const jsFiles = glob.sync("*js");
    console.log("jsFiles: *js", jsFiles);

    // const jsonFiles = glob.sync("*js*");
    // console.log("jsonFiles: *js*", jsonFiles);

    // const txtFiles = glob.sync("b*txt");
    // console.log("txtFiles: b*txt", txtFiles);
}

// useStar();

function useGroup() {
    const jsOrTxt = glob.sync("*{txt,js}");
    console.log("jsOrTxt: *{txt,js}", jsOrTxt);

}

// useGroup();

function useQuestion() {
    const files = glob.sync("bea?.txt");
    console.log("files: bea?.txt", files);

    const twoQs = glob.sync("be??.txt");
    console.log("twoQs: be??.txt", twoQs);
}

// useQuestion();

function useBrackets() {
    const files = glob.sync("be[aeiou]r.txt");
    console.log("files: be[aeiou]r.txt", files);
}

// useBrackets();

// Globbing in the terminal is case sensitive, but not glob.js
function caseSensitiveExample() {
    const TXTfiles = glob.sync("*TXT");
    console.log("TXT files: *TXT", TXTfiles);

    const files = glob.sync("*txt");
    console.log("txt files: *txt", files);
}

// caseSensitiveExample();

function parenthesisExample() {
    const exclFiles = glob.sync("be!(es|er).txt");
    console.log("exclFiles: be!(es|er).txt", exclFiles);

    console.log();
    
    const zeroOrOne = glob.sync("be?(es|er).txt");
    console.log("zeroOrOne: be?(es|er).txt", zeroOrOne);

    console.log();

    const oneOrMore = glob.sync("be+(es|er).txt");
    console.log("oneOrMore: be+(es|er).txt", oneOrMore);

    console.log();

    const zeroOrMore = glob.sync("be*(es|er).txt");
    console.log("zeroOrMore: be*(es|er).txt", zeroOrMore);

    console.log();
    
    const exactlyOne = glob.sync("be@(es|er).txt");
    console.log("exactlyOne: be@(es|er).txt", exactlyOne);

}

// parenthesisExample();

function globStar() {
    const subDirs = glob.sync("**");
    console.log("subDirs: **", subDirs);
}

// globStar();

