/// <reference types="cypress" />

import { getRandomNumbersSize } from '../common/getRandomNumbers';
import { getRandomText } from '../common/getRandomText';
import {Cidades} from '../common/generateNAME';
import {Imovel} from '../common/generateNAME';
import {Aviso} from '../common/generateNAME';
import {Frequencia} from '../common/generateNAME';
import { beforeEach } from 'mocha';

let nameCitys = Cidades();
let nameImovel = Imovel();
let nameAviso = Aviso();
let nameAviso1 = Aviso();
let nameFrequencia = Frequencia();
let RPVinferieur = getRandomNumbersSize(2);
let EquiteSuperieure  = getRandomNumbersSize(2);
let NameAlert = 'Test - ' + getRandomText(4);
let NameAlertErr = 'Test - ' + getRandomText(3);
let RPVsuperieur = getRandomNumbersSize(2);
let EquiteInferieure = getRandomNumbersSize(2);
let ValeurMarchande = getRandomNumbersSize(2);


describe('1 - Criação de alerta', () => {

  beforeEach(() => {
    cy.visit('/');

      cy.url()
      .should('include', 'auth.html#/connexion');

      cy.get('[name="userid"]')
        .type(Cypress.env('user'));

      cy.get('[name="password"]')
        .type(Cypress.env('pass'));

      cy.get('[type="submit"]')
        .click();
  })

    it('1.1 - Validação da jornada completa do usuário', () => {
      cy.wait(3500);

      cy.url()
        .should('include', 'app.html#/documents');

      cy.get('#alerts_menu_item')
        .click();

      cy.wait(3000);

      cy.url()
        .should('include', 'app.html#/prospection');

      cy.get('[ng-click="redirectToAlerts ()"]')
        .click();

      cy.url()
        .should('include', 'app.html#/alerts');

      cy.get('#create_alert_button')
        .click();

      cy.url()
        .should('include', 'app.html#/alerts/new');

      cy.get('#city')
        .clear().type(nameCitys);

      cy.get('#create_alert_button')
        .click();

      cy.get('.simple-form > .vdivide > :nth-child(1)')
        .should('contain.text', nameImovel);

      cy.get('.simple-form > .vdivide > :nth-child(1)')
        .contains(nameImovel).click();

      cy.get(':nth-child(2) > .form-group-form-alert')
        .should('contain.text', nameAviso, nameAviso1);

      cy.get(':nth-child(2) > .form-group-form-alert')
        .contains(nameAviso).click();

      cy.get(':nth-child(2) > .form-group-form-alert')
        .contains(nameAviso1).click();

      cy.get('.vdivide > :nth-child(3)')
        .should('contain.text', nameFrequencia);

      cy.get('.vdivide > :nth-child(3)')
        .contains(nameFrequencia).click();

      cy.get('#alert_name_input')
        .clear().type(NameAlert);

      cy.get('#more_alert_options_arrow')
        .click();

      cy.get('#construction_year_min')
        .select('2017');

      cy.get('#construction_year_max')
        .select('2018');

      cy.get('#building_value_options_min')
        .select('50000');

      cy.get('#building_value_options_max')
        .select('150000');

      cy.get('.btn > .col-xs-12')
        .click();

      cy.contains('Téléphoner') 
        .click();

      cy.get('#ratio_pre_filter')
        .clear().type(RPVinferieur);

      cy.get('[name="ratioEquityPreFilterLogicalOperator"]')
        .select('Ou');

      cy.get('[name="equityPreFilter"]')
        .clear().type(EquiteSuperieure);
        
      cy.get('.box-alert > :nth-child(5) > .col-md-12 > .switch > .slider')
        .click();

      cy.get('#ratio_percentage_input')
        .clear().type(RPVsuperieur);

      cy.get('#ratio_logical_operator')
        .select('Et');

      cy.get('#alert_equity_value_input')
        .clear().type(EquiteInferieure);

      cy.get('#main-body-content > div > aside > section > div > div > div.container > form > div.row.backgroud-pro-white.section-space-line > div:nth-child(7) > fieldset > div:nth-child(1) > div > div:nth-child(8) > div.row > div > label > span')
        .click();

      cy.get('#market_value_sign')
        .select('-');

      cy.get('#market_value_sign_value')
        .clear().type(ValeurMarchande);

      cy.get('[for="alert_with_clues"]')
        .click();

      cy.get('#button_submit_bottom_placeholder')
        .should('be.visible');

      cy.get('#button_submit_bottom_placeholder')
        .click();

      cy.url()
        .should('include', 'app.html#/alerts');

      cy.get('.custom-table-magin-top')
        .should('contain.text', NameAlert);
  })
    
    it('1.2 - Validação dos campos obrigatórios', () => {
      cy.wait(3500);

      cy.url()
        .should('include', 'app.html#/documents');

      cy.get('#alerts_menu_item')
        .click();

      cy.wait(3000);

      cy.url()
        .should('include', 'app.html#/prospection');

      cy.get('[ng-click="redirectToAlerts ()"]')
        .click();

      cy.url()
        .should('include', 'app.html#/alerts');

      cy.get('#create_alert_button')
        .click();

      cy.url()
        .should('include', 'app.html#/alerts/new');

      //Validação do aceite de entrada com o nome de outra cidade
      cy.get('#city')
        .clear().type('São Paulo');

      cy.get('#create_alert_button')
        .click();

      cy.get('.modal-body')
        .should('be.visible');

      cy.get('.modal-footer > .btn')
        .click();

      cy.get('#city')
        .clear().type(nameCitys);

      cy.get('#create_alert_button')
        .click();

      //Validação da obrigatoriedade do preenchimento da etapa #2
      cy.get(':nth-child(2) > .form-group-form-alert')
        .should('contain.text', nameAviso, nameAviso1);

      cy.get(':nth-child(2) > .form-group-form-alert')
        .contains(nameAviso).click();

      cy.get(':nth-child(2) > .form-group-form-alert')
        .contains(nameAviso1).click();

      cy.get('#alert_name_input')
        .clear().type(NameAlertErr);

      cy.get('#button_submit_top_placeholder')
        .click();

      cy.get('[ng-show="alertForm.alertPropertyType.$error.required"]')
        .should('be.visible').should('contain.text', 'Le Type de proprieté est obligatoire');

      cy.url()
      .should('include', 'app.html#/alerts/new');

      //Validação da obrigatoriedade do preenchimento da etapa #3
      cy.get('.simple-form > .vdivide > :nth-child(1)')
        .should('contain.text', nameImovel);

      cy.get('.simple-form > .vdivide > :nth-child(1)')
        .contains(nameImovel).click();

      cy.get(':nth-child(2) > .form-group-form-alert')
        .contains(nameAviso).click();

      cy.get(':nth-child(2) > .form-group-form-alert')
        .contains(nameAviso1).click();

      cy.get('#button_submit_top_placeholder').click()

      cy.get('[ng-if="alertForm.alertActtype.$error.required"]')
        .should('be.visible').should('contain.text', "Le Type d'acte est obligatoire");

      cy.url()
        .should('include', 'app.html#/alerts/new');

      //Validação da obrigatoriedade do preenchimento da etapa #5
      cy.get(':nth-child(2) > .form-group-form-alert')
        .contains(nameAviso).click();

      cy.get(':nth-child(2) > .form-group-form-alert')
        .contains(nameAviso1).click();

      cy.get('#alert_name_input')
        .clear();

      cy.get('#button_submit_top_placeholder')
        .click(); //Ao clicar em Sauvegarder não é retornado nenhum erro, porém a API para criação do alerta não é chamada
      });
  })

