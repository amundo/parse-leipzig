import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { 
  parseLeipzig
} from './parse-leipzig.js'

Deno.test("single morpheme", () => {
  let input = {
      "form": "sekarang",
      "gloss": "now"
  }
  
  let expected = [
    {
      "form": "sekarang",
      "gloss": "now"
    }
  ]
  
  assertEquals(parseLeipzig(input), expected);
})

Deno.test("clitic", () => {
  let input = {
    form: "palasi=lu",
    gloss: "priest=and"
  }
  let expected = [
    {
      "form": "palasi",
      "gloss": "priest"
    },
    {
      "form": "lu",
      "gloss": "and",
      "metadata": {
        "type": "clitic",
        "attach": "left"
      }
    }
  ]
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

/*

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
