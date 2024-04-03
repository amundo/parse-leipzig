/*
let parseInfix = form => {
  let lessThan = form.indexOf('<')
  let greaterThan = form.indexOf('>')
  
  let infix = form.slice(lessThan+1, greaterThan)

  let stem = form
    .replace(infix, '')
    .replaceAll('<', '')
    .replaceAll('>', '')

  return {stem, infix}
}
*/

let hasInfix = s => s.includes("<") && s.includes(">") 
  
let expandInfix = ({form, gloss}) => {
  if(!hasInfix(form) && !hasInfix(gloss)){ return word }
 
  let infixForm = form.slice(
    form.indexOf('<'),
    form.indexOf('>')
  )

  let infixGloss = gloss.slice(
    gloss.indexOf('<'),
    gloss.indexOf('>')
  )

  let infix = { form: infixForm, gloss: infixGloss }

  let stemForm = form.slice( 0, form.indexOf('<')) + 
    form.slice(form.indexOf('>') )
  
  let stemGloss = gloss.slice( 0, gloss.indexOf('<')) + 
    gloss.slice(gloss.indexOf('>') )

  let stem = {form: stemForm, gloss: stemGloss}

  let morphemes = [ infix, stem ]

  return morphemes
}

let parseLeipzig = ({form, gloss}) => {
  let formMorphemes = form.split(/[-=]/)
  let glossMorphemes = gloss.split(/[-=]/)

  if(formMorphemes.length != glossMorphemes.length){
    return
  }

  let allMorphemes = [...formMorphemes, ...glossMorphemes]

  if(allMorphemes.some(morpheme => morpheme.length === 0)){
    return
  }

  let morphemes = formMorphemes.map((formMorpheme, i) => {
    const morpheme = {
      form: formMorpheme,
      gloss: glossMorphemes[i],
    }
    return morpheme
  })

  let infixMorpheme = morphemes.find(morpheme => hasInfix(morpheme.form) && hasInfix(morpheme.gloss))

  
  if(infixMorpheme){
    let index = morphemes.findIndex(morpheme => infixMorpheme.form == morpheme.form && infixMorpheme.gloss == morpheme.gloss)
    morphemes.splice(1, index, ...expandInfix(infixMorpheme))
  }

  return morphemes
}

export { parseLeipzig }
