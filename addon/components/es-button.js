import Ember from 'ember';
import layout from '../templates/components/es-button';

export default Ember.Component.extend({
    layout,
    classNames: ['es-button'],
    classNameBindings: ['isBlock:button-block'],
    tagName: 'button',

    //accessibility support
    ariaDescribedby: null,
    ariaLabel: null,
    ariaPressed: null,
    title: null,

    //icon support
    hasIcon: false,
    iconUrl: null,

    isBlock: false



});