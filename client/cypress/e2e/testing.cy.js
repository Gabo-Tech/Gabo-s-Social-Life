<reference types="cypress"/>
import React from "react";
import Chance from 'chance';
const chance = new Chance();

describe('E2E', () => {
  function makeName(length) {
      let result           = '';
      const characters       = 'abcdefghijklmnopqrstuvwxyz';
      const charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
    return result;
  }
  const name = makeName(5);
  const lastName = makeName(6);
  const email = chance.email();
  const pass = 'randompassword';

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Register', () => {
    cy.get('.MuiContainer-root > .MuiPaper-root > .MuiToolbar-root > #signinBTN > .MuiButton-label').click()
    cy.get('.makeStyles-form-389 > .MuiGrid-root > .MuiGrid-root > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('.MuiGrid-root > .MuiGrid-root:nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(name)
    cy.get('.MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
    cy.get('.MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(lastName)
    cy.get('.MuiGrid-root > .MuiGrid-root:nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
    cy.get('.MuiGrid-root > .MuiGrid-root:nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('.MuiGrid-root > .MuiGrid-root:nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
    cy.get('.MuiGrid-root > .MuiGrid-root:nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(pass)
    cy.get('.MuiGrid-root > .MuiGrid-root:nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
    cy.get('.MuiGrid-root > .MuiGrid-root:nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(pass)
    cy.get('.MuiContainer-root > .MuiPaper-root > .makeStyles-form-389 > #submitFormBtn > .MuiButton-label').click()
  })
  it('Logout', () => {
    cy.get('#signinBTN > .MuiButton-label').click();
  })
  it('SignIn', function() {
    cy.get('.MuiContainer-root > .MuiPaper-root > .MuiToolbar-root > #signinBTN > .MuiButton-label').click()
    cy.get('.MuiGrid-root > .MuiGrid-root:nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
    cy.get('.MuiGrid-root > .MuiGrid-root:nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('.MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
    cy.get('.MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(pass)
    cy.get('#submitFormBtn > .MuiButton-label').click();
 })
  it('search tags', () => {
    cy.get('.MuiPaper-root > .MuiFormControl-root > .WAMuiChipInput-outlined-427 > .MuiInputBase-root > .MuiInputBase-input').click()
    cy.get('.MuiPaper-root > .MuiFormControl-root > .WAMuiChipInput-outlined-427 > .MuiInputBase-root > .MuiInputBase-input').type('tag')
    cy.get('.MuiGrid-root > .MuiGrid-root > .MuiPaper-root > .MuiButtonBase-root > .MuiButton-label').click()   
  })
  it('search titles', () => {
    cy.get('.MuiGrid-root > .MuiPaper-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').click()
    cy.get('.MuiGrid-root > .MuiPaper-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('this')
    cy.get('.MuiGrid-root > .MuiGrid-root > .MuiPaper-root > .MuiButtonBase-root > .MuiButton-label').click()
  })
  it('visit profile', () => {
    cy.get('.MuiContainer-root > .MuiPaper-root > .MuiToolbar-root > .makeStyles-profile-5 > a').click()
  })
  it('upload post', () => {
        cy.get('.MuiPaper-root > .makeStyles-root-46 > .MuiFormControl-root:nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get('.MuiPaper-root > .makeStyles-root-46 > .MuiFormControl-root:nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('This is the title')
        cy.get('.MuiPaper-root > .makeStyles-root-46 > .MuiFormControl-root:nth-child(3) > .MuiInputBase-root > .MuiInputBase-input:nth-child(1)').click()
        cy.get('.MuiPaper-root > .makeStyles-root-46 > .MuiFormControl-root:nth-child(3) > .MuiInputBase-root > .MuiInputBase-input:nth-child(1)').type('This is the description')
        cy.get('.MuiGrid-root > .MuiPaper-root > .makeStyles-root-46 > .makeStyles-fileInput-49 > input').click()
        cy.get('.MuiGrid-root > .MuiPaper-root > .makeStyles-root-46 > .makeStyles-fileInput-49 > input').type('C:\fakepath\2-Hip-Desktop-PSD-Mockups.jpg')
        cy.get('div > .MuiFormControl-root > .WAMuiChipInput-outlined-33 > .MuiInputBase-root > .MuiInputBase-input').click()
        cy.get('div > .MuiFormControl-root > .WAMuiChipInput-outlined-33 > .MuiInputBase-root > .MuiInputBase-input').type('hashtag,tag')
        cy.get('.MuiGrid-root > .MuiPaper-root > .makeStyles-root-46 > .MuiButtonBase-root:nth-child(6) > .MuiButton-label').click()
  })
  it('edit post', () => {
    cy.get('.MuiGrid-root:nth-child(1) > .MuiPaper-root > .MuiButtonBase-root path').click();
    cy.get('.MuiInputBase-inputMultiline:nth-child(1)').click();
    cy.get('.MuiInputBase-inputMultiline:nth-child(1)').type('this is the post message updated');
    cy.get('.makeStyles-buttonSubmit-1039 > .MuiButton-label').click();
    cy.get('.makeStyles-root-1035').submit();

       cy.get('.MuiGrid-root:nth-child(2) > .MuiPaper-root > .MuiButtonBase-root > .makeStyles-overlay2-132 > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root > path').click()
       cy.get('.MuiPaper-root > .makeStyles-root-120 > .MuiFormControl-root:nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click()
       cy.get('.MuiPaper-root > .makeStyles-root-120 > .MuiFormControl-root:nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').click()
       cy.get('.MuiPaper-root > .makeStyles-root-120 > .MuiFormControl-root:nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Edited post')
       cy.get('.MuiPaper-root > .makeStyles-root-120 > .MuiFormControl-root:nth-child(3) > .MuiInputBase-root > .MuiInputBase-input:nth-child(1)').click()
       cy.get('.MuiPaper-root > .makeStyles-root-120 > .MuiFormControl-root:nth-child(3) > .MuiInputBase-root > .MuiInputBase-input:nth-child(1)').click()
       cy.get('.MuiPaper-root > .makeStyles-root-120 > .MuiFormControl-root:nth-child(3) > .MuiInputBase-root > .MuiInputBase-input:nth-child(1)').click()
       cy.get('div > .MuiFormControl-root > .WAMuiChipInput-outlined-107 > .MuiInputBase-root > .MuiInputBase-input').click()
       cy.get('div > .MuiFormControl-root > .WAMuiChipInput-outlined-107 > .MuiInputBase-root > .MuiInputBase-input').type('tag')
       cy.get('.MuiGrid-root > .MuiGrid-root > .MuiPaper-root > .makeStyles-root-120 > .MuiButtonBase-root:nth-child(6)').click()
  })
  it('like post', () => {
        cy.get('.MuiGrid-root:nth-child(2) > .MuiPaper-root > .makeStyles-dark-538 > .MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root').click()
  })
  it('Comment post', () => {
    cy.get('.MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiPaper-root > .MuiButtonBase-root > .makeStyles-dark-538').click()
    cy.get('.makeStyles-commentsOuterContainer-545 > div > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input:nth-child(1)').click()
    cy.get('.makeStyles-commentsOuterContainer-545 > div > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input:nth-child(1)').type('This is another comment');
    cy.get('div > .makeStyles-commentsOuterContainer-545 > div > .MuiButtonBase-root > .MuiButton-label').click()
  })
  it('recommended posts and tag links and profile links', () => {
        cy.get('.MuiGrid-root:nth-child(2) > .MuiPaper-root > .MuiButtonBase-root > .makeStyles-dark-618 > .MuiTypography-root').click()
        cy.get('.MuiPaper-root > .makeStyles-section-621 > .makeStyles-recommendedPosts-623 > div:nth-child(3) > .makeStyles-invert-627').click()
        cy.get('.MuiPaper-root > .makeStyles-card-620 > .makeStyles-section-621 > .MuiTypography-root:nth-child(4) > a').click()
        cy.get('.MuiGrid-root > .MuiGrid-root:nth-child(1) > .MuiPaper-root > .MuiButtonBase-root > .MuiCardMedia-root').click()
        cy.get('.MuiPaper-root > .makeStyles-card-666 > .makeStyles-section-667 > .MuiTypography-root > a:nth-child(3)').click()
  })
  it('clear form', () => {
    cy.get('.MuiGrid-root:nth-child(2) .makeStyles-overlay2-1463 path').click();
    cy.get('.makeStyles-buttonClear-1456 > .MuiButton-label').click();
  })
  it('delete post', () => {
       cy.get('.MuiGrid-root:nth-child(2) > .MuiPaper-root > .makeStyles-dark-138 > .MuiCardActions-root > .MuiButtonBase-root:nth-child(2) > .MuiButton-label > .MuiSvgIcon-root > path').click()
  })
  it('Logout', () => {
    cy.get('.MuiPaper-root > .MuiToolbar-root > .makeStyles-profile-5 > .MuiButtonBase-root > .MuiButton-label').click()
  })
})