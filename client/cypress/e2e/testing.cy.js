<reference types="cypress"/>
import React from "react";
import Chance from 'chance';
const chance = new Chance();

describe('Start and register', () => {
  const email = chance.email();
  const pass = 'randompassword';

  beforeEach(() => {
    cy.visit('https://localhost:3000/')
  })

  it('passes register correctly', () => {
    cy.get('.MuiGrid-grid-md-9').click();
    cy.get('.MuiButton-contained:nth-child(1)').click();
    cy.get('.MuiButton-text > .MuiButton-label').click();
    cy.get('.MuiGrid-root:nth-child(1) > .MuiFormControl-root .MuiInputBase-input').type('Manolo');
    cy.get('.Mui-focused > .MuiInputBase-input').click();
    cy.get('.MuiGrid-root:nth-child(2) .MuiInputBase-input').type('Bombo');
    cy.get('.Mui-focused > .MuiInputBase-input').click();
    cy.get('.MuiGrid-root:nth-child(3) .MuiInputBase-input').type(email);
    cy.get('.MuiInputBase-inputAdornedEnd').click();
    cy.get('.MuiInputBase-inputAdornedEnd').type(pass);
    cy.get('.Mui-focused > .MuiInputBase-input').click();
    cy.get('.MuiGrid-root:nth-child(5) .MuiInputBase-input').type(pass);
    cy.get('.makeStyles-submit-404 > .MuiButton-label').click();
    cy.get('.makeStyles-form-403').submit();


  })
  it('passes signin correctly', () => {
    cy.get('.MuiGrid-grid-md-3').click();
    cy.get('.MuiButton-contained:nth-child(1) > .MuiButton-label').click();
    cy.url().should('contains', 'https://accounts.google.com/o/oauth2/iframe');
    cy.get('.Mui-focused > .MuiInputBase-input').click();
    cy.get('.Mui-focused > .MuiInputBase-input').type(email);
    cy.get('.MuiInputBase-inputAdornedEnd').click();
    cy.get('.MuiInputBase-inputAdornedEnd').type(pass);
    cy.get('.makeStyles-submit-75 > .MuiButton-label').click();
    cy.get('.makeStyles-form-74').submit();

  })
  it('search tags', () => {
    cy.get('.MuiGrid-item > .MuiGrid-root').click();
    cy.get('.WAMuiChipInput-input-609:nth-child(2)').click();
    cy.get('.makeStyles-searchButton-579 > .MuiButton-label').click();    
  })
  it('search titles', () => {
    cy.get('.Mui-focused > .MuiInputBase-input').click();
    cy.get('.MuiFormControl-root:nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('this');
    cy.get('.makeStyles-searchButton-512').click();
  })
  it('visit profile', () => {
    cy.get('.makeStyles-profile-5').click();
    cy.get('.makeStyles-profile-5 > a').click();
  })
  it('upload post', () => {
    cy.get('.Mui-focused > .MuiInputBase-input').click();
    cy.get('.MuiFormControl-root:nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('This is a new post');
    cy.get('.MuiInputBase-inputMultiline:nth-child(1)').click();
    cy.get('.MuiInputBase-inputMultiline:nth-child(1)').type('this is the post message');
    cy.get('.Mui-focused > .MuiInputBase-input').click();
    cy.get('.MuiFormControl-root:nth-child(1) > .WAMuiChipInput-outlined-954 .MuiInputBase-input').type('');
    cy.get('.makeStyles-fileInput-970 > input').click();
    cy.get('.makeStyles-fileInput-970 > input').type('C:\fakepath\MERN-Stack-considered-the-Best-for-Developing-Web-Apps.png');
    cy.get('.WAMuiChipInput-focused-961 > .MuiInputBase-root').click();
    cy.get('.makeStyles-buttonSubmit-971 > .MuiButton-label').click();
    cy.get('.makeStyles-root-967').submit();
  })
  it('edit post', () => {
    cy.get('.MuiGrid-root:nth-child(1) > .MuiPaper-root > .MuiButtonBase-root path').click();
    cy.get('.MuiInputBase-inputMultiline:nth-child(1)').click();
    cy.get('.MuiInputBase-inputMultiline:nth-child(1)').type('this is the post message updated');
    cy.get('.makeStyles-buttonSubmit-1039 > .MuiButton-label').click();
    cy.get('.makeStyles-root-1035').submit();
  })
  it('like post', () => {
    
  })
  it('comment post', () => {
    cy.get('.MuiInputBase-input:nth-child(1)').click();
    cy.get('.MuiInputBase-input:nth-child(1)').type('This is a comment');
    cy.get('.MuiButton-containedPrimary > .MuiButton-label').click();
  })
  it('recommended posts and tag links and profile links', () => {
    
  })
  it('clear form', () => {
    cy.get('.MuiGrid-root:nth-child(2) .makeStyles-overlay2-1463 path').click();
    cy.get('.makeStyles-buttonClear-1456 > .MuiButton-label').click();
  })
  it('delete post', () => {
    cy.get('.MuiGrid-root:nth-child(1) > .MuiPaper-root .MuiButtonBase-root:nth-child(2) path').click();
  })
  it('logout', () => {
    cy.get('.MuiGrid-grid-md-9').click();
  })
})