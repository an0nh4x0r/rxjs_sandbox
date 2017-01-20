import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $('#btn');

const btnStream$ = Rx.Observable.fromEvent(btn, 'click');
