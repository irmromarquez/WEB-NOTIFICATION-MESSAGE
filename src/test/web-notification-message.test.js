import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing'; // eslint-disable-line import/no-extraneous-dependencies
import '../main-buttom';
import sinon from 'sinon';


suite('ComponentLit', () => {
  let el;
 
  teardown(() => fixtureCleanup());
 
  setup(async () => {
    el = await fixture(html`<web-notification-message></web-notification-message>`);
    await el.updateComplete;

  });
 
  test('instantiating properties works', () => {
    assert.isArray(el.dataMessage);
    assert.equal(el.button, 'button');
   });

   test('event icon-click close', () => {

    el.addEventListener('icon-click', (evt) => {
        if(evt.detail.icon == 'close') el.dispayNone(evt.detail.id);
        el.requestUpdate();
      })
    
   });

   test('event icon-click arrow-down', () => {

    el.addEventListener('icon-click', (evt) => {
        if(evt.detail.icon == 'arrow-down') el.displayCard(evt.detail.id);    
        el.requestUpdate();
      })
    
    
   });

 
});