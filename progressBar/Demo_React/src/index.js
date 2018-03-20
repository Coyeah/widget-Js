import React, { Component } from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import Greeter from './Greeter';

import './css.scss';

const renderDom = Component => {
	render(
		<Component />,
		document.getElementById('loading')
	);
}
renderDom(Greeter);

document.onreadystatechange = function() {
	if (document.readyState == "complete") {
		$("#loading").fadeOut();
	}
}