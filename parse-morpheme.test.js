import { 
  assertEquals,
  assertExists
} from "https://deno.land/std/testing/asserts.ts";
import { 
  parseMorpheme
} from './parse-morpheme.js'

Deno.test("basic morpheme", () => {
  let input = {
      "form": "sekarang",
      "gloss": "now"
  }
  
  let expected = {
      "form": "sekarang",
      "gloss": "now",
      "grammar": {}
    }
  
  assertEquals(parseMorpheme(input), expected);
})


Deno.test(".grammar is a {}", () => {
  let input = {
    "form": "sekarang",
    "gloss": "now"
  }

  assertExists(parseMorpheme(input).grammar);
})

/*

Deno.test("clitic", () => {
  let input = {
    form: "=lu",
    gloss: "=and"
  }
  let expected = {
    "form": "lu",
    "gloss": "and",
    "grammar": {
      "type": "clitic",
      "attach": "left"
    }
  }
  
  assertEquals(parseLeipzig(input), expected)
})

Deno.test("no empty morphemes", () => {
  let input = {
    form: 'amuq’--č', 
    gloss: 'stay-FUT-NEG'
  }
  let expected = undefined
  assertEquals(parseLeipzig(input), expected)
})


Deno.test("parse infix", () => {
  let input = {
    "form": "b<um>ili",
    "gloss": "<ACTFOC>buy"
  }
  let expected = [
    {
      "form": "um",
      "stem": "ACTFOC"
    },
    {
      "form": "bili",
      "stem": "buy"
    }
  ]
  assertEquals(parseLeipzig(input), expected)
})


Deno.test("infix", () => {
  let input = {
    "form": "b<um>ili",
    "gloss": "<ACTFOC>buy"
  }
  let expected = [
    { form: "bili", gloss: "buy" },
    { form: "um", gloss: "ACTFOC" }
  ];
  assertEquals(parseLeipzig(input), expected);
})
*/
