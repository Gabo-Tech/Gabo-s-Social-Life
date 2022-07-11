<reference types="cypress"/>
import React from "react";
import Chance from 'chance';
const chance = new Chance();

describe('E2E', () => {
  const email = chance.email();
  const pass = 'randompassword';

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Register', () => {
    cy.get('#signinBTN > .MuiButton-label').click();
    cy.get('.MuiButton-text > .MuiButton-label').click();
    cy.get('.MuiGrid-root:nth-child(1) > .MuiFormControl-root .MuiInputBase-input').type('Manolito');
    cy.get('.Mui-focused > .MuiInputBase-input').click();
    cy.get('.MuiGrid-root:nth-child(2) .MuiInputBase-input').type('Gafotas');
    cy.get('.Mui-focused > .MuiInputBase-input').click();
    cy.get('.MuiGrid-root:nth-child(3) .MuiInputBase-input').type(email);
    cy.get('.MuiInputBase-inputAdornedEnd').click();
    cy.get('.MuiInputBase-inputAdornedEnd').type(pass);
    cy.get('.Mui-focused > .MuiInputBase-input').click();
    cy.get('.MuiGrid-root:nth-child(5) .MuiInputBase-input').type(pass);
    cy.get('#submitFormBtn > .MuiButton-label').click();
  })
  it('Logout', () => {
    cy.get('#signinBTN > .MuiButton-label').click();
  })
  it('SignIn', () => {
    cy.get('#signinBTN > .MuiButton-label').click();
    cy.get('.Mui-focused > .MuiInputBase-input').click();
    cy.get('.Mui-focused > .MuiInputBase-input').type(email);
    cy.get('.MuiInputBase-inputAdornedEnd').dblclick();
    cy.get('.MuiInputBase-inputAdornedEnd').type(pass);
    cy.get('#submitFormBtn > .MuiButton-label').click();   
  })
  // it('search tags', () => {
  //   cy.get('.MuiGrid-item > .MuiGrid-root').click();
  //   cy.get('.WAMuiChipInput-input-609:nth-child(2)').click();
  //   cy.get('.makeStyles-searchButton-579 > .MuiButton-label').click();    
  // })
  // it('search titles', () => {
  //   cy.get('.Mui-focused > .MuiInputBase-input').click();
  //   cy.get('.MuiFormControl-root:nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('this');
  //   cy.get('.makeStyles-searchButton-512').click();
  // })
  // it('visit profile', () => {
  //   cy.get('.makeStyles-profile-5').click();
  //   cy.get('.makeStyles-profile-5 > a').click();
  // })
  // it('upload post', () => {
  //   cy.get('.Mui-focused > .MuiInputBase-input').click();
  //   cy.get('.MuiFormControl-root:nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('This is a new post');
  //   cy.get('.MuiInputBase-inputMultiline:nth-child(1)').click();
  //   cy.get('.MuiInputBase-inputMultiline:nth-child(1)').type('this is the post message');
  //   cy.get('.Mui-focused > .MuiInputBase-input').click();
  //   cy.get('.MuiFormControl-root:nth-child(1) > .WAMuiChipInput-outlined-954 .MuiInputBase-input').type('');
  //   cy.get('.makeStyles-fileInput-970 > input').click();
  //   cy.get('.makeStyles-fileInput-970 > input').type('C:\fakepath\MERN-Stack-considered-the-Best-for-Developing-Web-Apps.png');
  //   cy.get('.WAMuiChipInput-focused-961 > .MuiInputBase-root').click();
  //   cy.get('.makeStyles-buttonSubmit-971 > .MuiButton-label').click();
  //   cy.get('.makeStyles-root-967').submit();
  // })
  // it('edit post', () => {
  //   cy.get('.MuiGrid-root:nth-child(1) > .MuiPaper-root > .MuiButtonBase-root path').click();
  //   cy.get('.MuiInputBase-inputMultiline:nth-child(1)').click();
  //   cy.get('.MuiInputBase-inputMultiline:nth-child(1)').type('this is the post message updated');
  //   cy.get('.makeStyles-buttonSubmit-1039 > .MuiButton-label').click();
  //   cy.get('.makeStyles-root-1035').submit();
  // })
  // it('like post', () => {
    
  // })
  // it('comment post', () => {
  //   cy.get('.MuiInputBase-input:nth-child(1)').click();
  //   cy.get('.MuiInputBase-input:nth-child(1)').type('This is a comment');
  //   cy.get('.MuiButton-containedPrimary > .MuiButton-label').click();
  // })
  // it('recommended posts and tag links and profile links', () => {
    
  // })
  // it('clear form', () => {
  //   cy.get('.MuiGrid-root:nth-child(2) .makeStyles-overlay2-1463 path').click();
  //   cy.get('.makeStyles-buttonClear-1456 > .MuiButton-label').click();
  // })
  // it('delete post', () => {
  //   cy.get('.MuiGrid-root:nth-child(1) > .MuiPaper-root .MuiButtonBase-root:nth-child(2) path').click();
  // })
  // it('logout', () => {
  //   cy.get('.MuiGrid-grid-md-9').click();
  // })
})