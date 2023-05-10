'use strict';

// Global components list
let components = window.components = {};

components.fontAwesome = {
	selector: '[class*="fa-"]',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/font-awesome/font-awesome.css'
};

components.mdi = {
	selector: '[class*="mdi-"], .rd-navbar-search-toggle',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/mdi/mdi.css'
};

components.linIcon = {
	selector: '.lin',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/lin-icon/lin-icon.css'
};

components.fonts = {
	selector: 'html',
	styles: '//fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Spectral:wght@200;300;400;600&display=swap'
};

components.pageReveal = {
	selector: '.page',
	init: function( nodes ) {
		window.addEventListener( 'components:ready', function () {
			window.dispatchEvent( new Event( 'resize' ) );
			document.documentElement.classList.add( 'components-ready' );

			nodes.forEach( function( node ) {
				setTimeout( function() {
					node.classList.add( 'page-revealed' );
				}, 500 );
			});
		}, { once: true } );
	}
};

components.grid = {
	selector: '.container, .container-fluid, .row, [class*="col-"]',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/grid/grid.css'
};

components.logo = {
	selector: '.logo',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/logo/logo.css'
};

components.section = {
	selector: 'section',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/section/section.css'
};

components.link = {
	selector: '[class*="link"]',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/link/link.css'
};

components.icon = {
	selector: '.icon',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/icon/icon.css'
};

components.button = {
	selector: '.btn',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/button/button.css'
};

components.buttonNuka = {
	selector: '.btn-nuka',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/button/button.css',
	init: function( nodes ) {
		nodes.forEach( function ( node ) {
			let btnOverlay = node.querySelector( '.btn-overlay' );
			node.addEventListener( 'mouseenter', function ( e ) {
				btnOverlay.style.top = e.offsetY + 'px';
				btnOverlay.style.left = e.offsetX + 'px';
			});
			node.addEventListener( 'mouseout', function ( e ) {
				btnOverlay.style.top = e.offsetY + 'px';
				btnOverlay.style.left = e.offsetX + 'px';
			});
		} );
	}
};

components.input = {
	selector: '.form-group, .input-group, .form-check, .custom-control, .form-control',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/input/input.css'
};

components.label = {
	selector: '.form-label',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/form-label/form-label.css',
	script: [
		'https://ld-wt73.template-help.com/wt_prod-31700/components/jquery/jquery-3.4.1.min.js',
		'https://ld-wt73.template-help.com/wt_prod-31700/components/form-label/rd-input-label.min.js',
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ){
			let $node = $(node);
			$node.RDInputLabel();
		});
	}
};

components.media = {
	selector: '.media',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/media/media.css'
};

components.list = {
	selector: '.list',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/list/list.css'
};

components.divider = {
	selector: '.divider',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/divider/divider.css'
};

components.position = {
	selector: '[class*="position-"], [class*="fixed-"], [class*="sticky-"]',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/position/position.css'
};

components.block = {
	selector: '.block',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/block/block.css'
};

components.quote = {
	selector: '.quote',
	styles: [
		'https://ld-wt73.template-help.com/wt_prod-31700/components/media/media.css',
		'https://ld-wt73.template-help.com/wt_prod-31700/components/quote/quote.css'
	]
};

components.author = {
	selector: '.author',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/author/author.css'
};

components.footer = {
	selector: 'footer',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/footer/footer.css'
};

components.rights = {
	selector: '.rights',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/rights/rights.css'
};

components.animate = {
	selector: '[data-animate]',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/animate/animate.css',
	script: 'https://ld-wt73.template-help.com/wt_prod-31700/components/current-device/current-device.min.js',
	init: function ( nodes ) {
		if ( window.xMode || device.macos() ) {
			nodes.forEach( function ( node ) {
				let params = parseJSON( node.getAttribute( 'data-animate' ) );
				node.classList.add( 'animated', params.class );
			});
		} else {
			let observer = new IntersectionObserver( function ( entries, observer ) {
				entries.forEach( function ( entry ) {
					let
						node = entry.target,
						params = parseJSON( node.getAttribute( 'data-animate' ) );

					if ( params.delay ) node.style.animationDelay = params.delay;
					if ( params.duration ) node.style.animationDuration = params.duration;

					if ( entry.isIntersecting ) {
						node.classList.add( 'animated', params.class );
						observer.unobserve( node );
					}
				});
			}, {
				threshold: .5
			});

			nodes.forEach( function ( node ) {
				observer.observe( node );
			});
		}
	}
};

components.currentDevice = {
	selector: 'html',
	script: 'https://ld-wt73.template-help.com/wt_prod-31700/components/current-device/current-device.min.js'
};

components.rdNavbar = {
	selector: '.rd-navbar',
	styles: [
		'https://ld-wt73.template-help.com/wt_prod-31700/components/rd-navbar/rd-navbar.css'
	],
	script: [
		'https://ld-wt73.template-help.com/wt_prod-31700/components/jquery/jquery-3.4.1.min.js',
		'https://ld-wt73.template-help.com/wt_prod-31700/components/util/util.min.js',
		'https://ld-wt73.template-help.com/wt_prod-31700/components/current-device/current-device.min.js',
		'https://ld-wt73.template-help.com/wt_prod-31700/components/rd-navbar/rd-navbar.min.js'
	],
	dependencies: 'currentDevice',
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let
				backButtons = node.querySelectorAll( '.navbar-navigation-back-btn' ),
				params = parseJSON( node.getAttribute( 'data-rd-navbar' ) ),
				defaults = {
					stickUpClone: false,
					anchorNav: true,
					autoHeight: false,
					stickUpOffset: '1px',
					responsive: {
						0: {
							layout: 'rd-navbar-fixed',
							deviceLayout: 'rd-navbar-fixed',
							focusOnHover: 'ontouchstart' in window,
							stickUp: false
						},
						992: {
							layout: 'rd-navbar-fixed',
							deviceLayout: 'rd-navbar-fixed',
							focusOnHover: 'ontouchstart' in window,
							stickUp: false
						},
						1200: {
							layout: 'rd-navbar-static',
							deviceLayout: 'rd-navbar-static',
							stickUp: true,
							stickUpOffset: '1px',
							autoHeight: true
						}
					},
					callbacks: {
						onStuck: function () {
							document.documentElement.classList.add( 'rd-navbar-stuck' );
						},
						onUnstuck: function () {
							document.documentElement.classList.remove( 'rd-navbar-stuck' );
						},
						onDropdownToggle: function () {
							if ( this.classList.contains( 'opened' ) ) {
								this.parentElement.classList.add( 'overlaid' );
							} else {
								this.parentElement.classList.remove( 'overlaid' );
							}
						},
						onDropdownClose: function () {
							this.parentElement.classList.remove( 'overlaid' );
						}
					}
				},
				xModeParams = {
					stickUpClone: false,
					anchorNav: false,
					responsive: {
						0: {
							stickUp: false,
							stickUpClone: false
						},
						992: {
							stickUp: false,
							stickUpClone: false
						},
						1200: {
							stickUp: false,
							stickUpClone: false
						}
					},
					callbacks: {
						onDropdownOver: function () { return false; }
					}
				},
				navbar = node.RDNavbar = new RDNavbar( node, Util.merge( window.xMode ? [ defaults, params, xModeParams ] : [ defaults, params ] ) );

			if ( backButtons.length ) {
				backButtons.forEach( function ( btn ) {
					btn.addEventListener( 'click', function () {
						let
							submenu = this.closest( '.rd-navbar-submenu' ),
							parentmenu = submenu.parentElement;

						navbar.dropdownToggle.call( submenu, navbar );
					});
				});
			}
		});
	}
};

components.regula = {
	selector: '[data-constraints]',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/regula/regula.css',
	script: [
		'https://ld-wt73.template-help.com/wt_prod-31700/components/jquery/jquery-3.4.1.min.js',
		'https://ld-wt73.template-help.com/wt_prod-31700/components/regula/regula.min.js'
	],
	init: function ( nodes ) {
		let elements = $( nodes );

		// Custom validator - phone number
		regula.custom({
			name: 'PhoneNumber',
			defaultMessage: 'Invalid phone number format',
			validator: function() {
				if ( this.value === '' ) return true;
				else return /^(\+\d)?[0-9\-\(\) ]{5,}$/i.test( this.value );
			}
		});

		for (let i = 0; i < elements.length; i++) {
			let o = $(elements[i]), v;
			o.addClass("form-control-has-validation").after("<span class='form-validation'></span>");
			v = o.parent().find(".form-validation");
			if (v.is(":last-child")) o.addClass("form-control-last-child");
		}

		elements.on('input change propertychange blur', function (e) {
			let $this = $(this), results;

			if (e.type !== "blur") if (!$this.parent().hasClass("has-error")) return;
			if ($this.parents('.rd-mailform').hasClass('success')) return;

			if (( results = $this.regula('validate') ).length) {
				for (let i = 0; i < results.length; i++) {
					$this.siblings(".form-validation").text(results[i].message).parent().addClass("has-error");
				}
			} else {
				$this.siblings(".form-validation").text("").parent().removeClass("has-error")
			}
		}).regula('bind');

		let regularConstraintsMessages = [
			{
				type: regula.Constraint.Required,
				newMessage: "The text field is required."
			},
			{
				type: regula.Constraint.Email,
				newMessage: "The email is not a valid email."
			},
			{
				type: regula.Constraint.Numeric,
				newMessage: "Only numbers are required"
			},
			{
				type: regula.Constraint.Selected,
				newMessage: "Please choose an option."
			}
		];


		for (let i = 0; i < regularConstraintsMessages.length; i++) {
			let regularConstraint = regularConstraintsMessages[i];

			regula.override({
				constraintType: regularConstraint.type,
				defaultMessage: regularConstraint.newMessage
			});
		}
	}
};

components.rdMailform = {
	selector: '.rd-mailform',
	styles: [
		'https://ld-wt73.template-help.com/wt_prod-31700/components/rd-mailform/rd-mailform.css',
		'https://ld-wt73.template-help.com/wt_prod-31700/components/font-awesome/font-awesome.css',
		'https://ld-wt73.template-help.com/wt_prod-31700/components/mdi/mdi.css'
	],
	script: [
		'https://ld-wt73.template-help.com/wt_prod-31700/components/jquery/jquery-3.4.1.min.js',
		'https://ld-wt73.template-help.com/wt_prod-31700/components/rd-mailform/rd-mailform.min.js',
	],
	init: function ( nodes ) {
		let i, j, k,
			$captchas = $( nodes ).find( '.recaptcha' ),
			msg = {
				'MF000': 'Successfully sent!',
				'MF001': 'Recipients are not set!',
				'MF002': 'Form will not work locally!',
				'MF003': 'Please, define email field in your form!',
				'MF004': 'Please, define type of your form!',
				'MF254': 'Something went wrong with PHPMailer!',
				'MF255': 'Aw, snap! Something went wrong.'
			};

		if ( $captchas.length ) {
			$.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en");
		}

		/**
		 * @desc Check if all elements pass validation
		 * @param {object} elements - object of items for validation
		 * @param {object} captcha - captcha object for validation
		 * @return {boolean}
		 */
		function isValidated(elements, captcha) {
			let results, errors = 0;

			if (elements.length) {
				for (let j = 0; j < elements.length; j++) {

					let $input = $(elements[j]);
					if ((results = $input.regula('validate')).length) {
						for (k = 0; k < results.length; k++) {
							errors++;
							$input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
						}
					} else {
						$input.siblings(".form-validation").text("").parent().removeClass("has-error");
					}
				}

				if (captcha) {
					if (captcha.length) {
						return validateReCaptcha(captcha) && errors === 0
					}
				}

				return errors === 0;
			}
			return true;
		}

		/**
		 * @desc Validate google reCaptcha
		 * @param {object} captcha - captcha object for validation
		 * @return {boolean}
		 */
		function validateReCaptcha(captcha) {
			let captchaToken = captcha.find('.g-recaptcha-response').val();

			if (captchaToken.length === 0) {
				captcha
					.siblings('.form-validation')
					.html('Please, prove that you are not robot.')
					.addClass('active');
				captcha
					.closest('.form-wrap')
					.addClass('has-error');

				captcha.on('propertychange', function () {
					let $this = $(this),
						captchaToken = $this.find('.g-recaptcha-response').val();

					if (captchaToken.length > 0) {
						$this
							.closest('.form-wrap')
							.removeClass('has-error');
						$this
							.siblings('.form-validation')
							.removeClass('active')
							.html('');
						$this.off('propertychange');
					}
				});

				return false;
			}

			return true;
		}

		/**
		 * @desc Initialize Google reCaptcha
		 */
		window.onloadCaptchaCallback = function () {
			for (let i = 0; i < $captchas.length; i++) {
				let
					$captcha = $($captchas[i]),
					resizeHandler = (function() {
						let
							frame = this.querySelector( 'iframe' ),
							inner = this.firstElementChild,
							inner2 = inner.firstElementChild,
							containerRect = null,
							frameRect = null,
							scale = null;

						inner2.style.transform = '';
						inner.style.height = 'auto';
						inner.style.width = 'auto';

						containerRect = this.getBoundingClientRect();
						frameRect = frame.getBoundingClientRect();
						scale = containerRect.width/frameRect.width;

						if ( scale < 1 ) {
							inner2.style.transform = 'scale('+ scale +')';
							inner.style.height = ( frameRect.height * scale ) + 'px';
							inner.style.width = ( frameRect.width * scale ) + 'px';
						}
					}).bind( $captchas[i] );

				grecaptcha.render(
					$captcha.attr('id'),
					{
						sitekey: $captcha.attr('data-sitekey'),
						size: $captcha.attr('data-size') ? $captcha.attr('data-size') : 'normal',
						theme: $captcha.attr('data-theme') ? $captcha.attr('data-theme') : 'light',
						callback: function () {
							$('.recaptcha').trigger('propertychange');
						}
					}
				);

				$captcha.after("<span class='form-validation'></span>");

				if ( $captchas[i].hasAttribute( 'data-auto-size' ) ) {
					resizeHandler();
					window.addEventListener( 'resize', resizeHandler );
				}
			}
		};

		for ( i = 0; i < nodes.length; i++ ) {
			let
				$form = $(nodes[i]),
				formHasCaptcha = false;

			$form.attr('novalidate', 'novalidate').ajaxForm({
				data: {
					"form-type": $form.attr("data-form-type") || "contact",
					"counter": i
				},
				beforeSubmit: function (arr, $form, options) {
					let
						form = $(nodes[this.extraData.counter]),
						inputs = form.find("[data-constraints]"),
						output = $("#" + form.attr("data-form-output")),
						captcha = form.find('.recaptcha'),
						captchaFlag = true;

					output.removeClass("active error success");

					if (isValidated(inputs, captcha)) {

						// veify reCaptcha
						if (captcha.length) {
							let captchaToken = captcha.find('.g-recaptcha-response').val(),
								captchaMsg = {
									'CPT001': 'Please, setup you "site key" and "secret key" of reCaptcha',
									'CPT002': 'Something wrong with google reCaptcha'
								};

							formHasCaptcha = true;

							$.ajax({
								method: "POST",
								url: "components/rd-mailform/reCaptcha.php",
								data: {'g-recaptcha-response': captchaToken},
								async: false
							})
								.done(function (responceCode) {
									if (responceCode !== 'CPT000') {
										if (output.hasClass("snackbar")) {
											output.html('<div class="snackbar-inner"><div class="snackbar-title"><span class="icon snackbar-icon mdi-check"></span>'+ captchaMsg[responceCode] +'</div></div>');

											setTimeout(function () {
												output.removeClass("active");
											}, 3500);

											captchaFlag = false;
										} else {
											output.html(captchaMsg[responceCode]);
										}

										output.addClass("active");
									}
								});
						}

						if (!captchaFlag) {
							return false;
						}

						form.addClass('form-in-process');

						if (output.hasClass("snackbar")) {
							// output.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>');
							output.html('<div class="snackbar-inner"><div class="snackbar-title"><span class="icon snackbar-icon fa-circle-o-notch fa-spin"></span>Sending</div></div>');
							output.addClass("active");
						}
					} else {
						return false;
					}
				},
				error: function (result) {
					let output = $("#" + $(nodes[this.extraData.counter]).attr("data-form-output")),
						form = $(nodes[this.extraData.counter]);

					output.text(msg[result]);
					form.removeClass('form-in-process');

					if (formHasCaptcha) {
						grecaptcha.reset();
					}
				},
				success: function (result) {
					let form = $(nodes[this.extraData.counter]),
						output = $("#" + form.attr("data-form-output")),
						select = form.find('select');

					form
						.addClass('success')
						.removeClass('form-in-process');

					if (formHasCaptcha) {
						grecaptcha.reset();
					}

					result = result.length === 5 ? result : 'MF255';
					output.text(msg[result]);

					if (result === "MF000") {
						if (output.hasClass("snackbar")) {
							output.html('<div class="snackbar-inner"><div class="snackbar-title"><span class="icon snackbar-icon mdi-check"></span>'+ msg[result] +'</div></div>');
						} else {
							output.addClass("active success");
						}
					} else {
						if (output.hasClass("snackbar")) {
							output.html('<div class="snackbar-inner"><div class="snackbar-title"><span class="icon snackbar-icon mdi-alert-outline"></span>'+ msg[result] +'</div></div>');
						} else {
							output.addClass("active error");
						}
					}

					form.clearForm();

					if (select.length) {
						select.select2("val", "");
					}

					form.find('input, textarea').trigger('blur');

					setTimeout(function () {
						output.removeClass("active error success");
						form.removeClass('success');
					}, 3500);
				}
			});
		}
	}
};

components.formOutput = {
	selector: '.form-output',
	styles:   'https://ld-wt73.template-help.com/wt_prod-31700/components/form-output/form-output.css'
};

components.snackbar = {
	selector: '.snackbar',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/snackbar/snackbar.css'
};

components.owl = {
	selector: '.owl-carousel',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/owl-carousel/owl.carousel.css',
	script: [
		'https://ld-wt73.template-help.com/wt_prod-31700/components/jquery/jquery-3.4.1.min.js',
		'https://ld-wt73.template-help.com/wt_prod-31700/components/owl-carousel/owl.carousel.min.js',
		'https://ld-wt73.template-help.com/wt_prod-31700/components/util/util.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let
				params = parseJSON( node.getAttribute( 'data-owl' ) ),
				defaults = {
					items: 1,
					margin: 30,
					loop: true,
					mouseDrag: true,
					stagePadding: 0,
					nav: false,
					navText: [],
					dots: false,
					autoplay: true,
					autoplayHoverPause: true
				},
				xMode = {
					autoplay: false,
					loop: false,
					mouseDrag: false
				}

			node.owl = $( node );

			let tmp = Util.merge( window.xMode ? [ defaults, params, xMode ] : [ defaults, params ] );

			$( node ).owlCarousel( tmp );
		});
	}
};

components.counter = {
	selector: '[data-counter]',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/counter/counter.css',
	script: [
		'https://ld-wt73.template-help.com/wt_prod-31700/components/util/util.min.js',
		'https://ld-wt73.template-help.com/wt_prod-31700/components/counter/counter.min.js',
	],
	init: function ( nodes ) {
		let observer = new IntersectionObserver( function ( entries, observer ) {
			entries.forEach( function ( entry ) {
				let node = entry.target;

				if ( entry.isIntersecting ) {
					node.counter.run();
					observer.unobserve( node );
				}
			});
		}, {
			rootMargin: '0px',
			threshold: 1.0
		});

		nodes.forEach( function ( node ) {
			aCounter( Object.assign( {
				node: node,
				duration: 1000
			}, parseJSON( node.getAttribute( 'data-counter' ) ) ) );

			observer.observe( node );
		} )
	}
};

components.toTop = {
	selector: '.to-top',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/to-top/to-top.css',
	script: 'https://ld-wt73.template-help.com/wt_prod-31700/components/jquery/jquery-3.4.1.min.js',
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			node.addEventListener( 'mousedown', function () {
				this.classList.add( 'active' );

				$( 'html, body' ).stop().animate( { scrollTop:0 }, 500, 'swing', (function () {
					this.classList.remove( 'active' );
				}).bind( this ));
			});
		});

		document.addEventListener( 'scroll', function () {
			if ( window.scrollY > window.innerHeight ) {
				nodes.forEach( function ( node ) {
					node.classList.add( 'show' );
				});
			} else {
				nodes.forEach( function ( node ) {
					node.classList.remove( 'show' );
				});
			}
		});
	}
};

components.sevice = {
	selector: '.service',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/service/service.css',
};

components.brand = {
	selector: '.brand',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/brand/brand.css',
};

components.plans = {
	selector: '.plans',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/plans/plans.css',
};

components.programs = {
	selector: '.programs',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/programs/programs.css',
};

components.blurb = {
	selector: '.blurb',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/blurb/blurb.css',
};

components.lightgallery = {
	selector: '[data-lightgallery]',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/lightgallery/lightgallery.css',
	script: [
		'https://ld-wt73.template-help.com/wt_prod-31700/components/jquery/jquery-3.4.1.min.js',
		'https://ld-wt73.template-help.com/wt_prod-31700/components/lightgallery/lightgallery.min.js',
		'https://ld-wt73.template-help.com/wt_prod-31700/components/util/util.min.js'
	],
	init: function ( nodes ) {
		if ( !window.xMode ) {
			nodes.forEach( function ( node ) {
				node = $( node );
				let
						defaults = {
							thumbnail: true,
							selector: '.lightgallery-item',
							youtubePlayerParams: {
								modestbranding: 1,
								showinfo: 0,
								rel: 0,
								controls: 0
							},
							vimeoPlayerParams: {
								byline : 0,
								portrait : 0,
								color : 'A90707'
							}
						},
						options = parseJSON( node.attr( 'data-lightgallery' ) );

				node.lightGallery( Util.merge( [ defaults, options ] ) );
			});
		}
	}
};

components.thumbnail = {
	selector: '.thumbnail',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/thumbnail/thumbnail.css'
};

components.pricing = {
	selector: '.pricing',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/pricing/pricing.css'
};

components.copyrightYear = {
	selector: '.copyright-year',
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			node.innerHTML = new Date().getFullYear();
		});
	}
};

components.modalBtn = {
	selector: '[data-modal-trigger]',
	dependencies: 'modal',
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			let params = parseJSON( node.getAttribute( 'data-modal-trigger' ) );

			node.addEventListener( 'click', function () {
				let modal = document.querySelector( params.target );
				if ( modal.classList.contains( 'show' ) ) {
					$( modal ).modal( 'hide' );
				} else {
					$( modal ).modal( 'show' );
				}
			});
		});
	}
};

components.modalBtn	 = {
	selector: '.modal',
	styles: 'https://ld-wt73.template-help.com/wt_prod-31700/components/modal/modal.css',
	script: [
		'https://ld-wt73.template-help.com/wt_prod-31700/components/jquery/jquery-3.4.1.min.js',
		// 'assets/js/jquery-3.4.1.min.js',
		// 'file:///G:/Templates/astro%201/ld-wt73.template-help.com/wt_prod-31700/assets/js/jquery-3.4.1.min.js'
		'https://ld-wt73.template-help.com/wt_prod-31700/components/bootstrap/js/popper.js',
		// 'assets/js/popper.js',
		'https://ld-wt73.template-help.com/wt_prod-31700/components/bootstrap/js/bootstrap.min.js'
	],
	init: function ( nodes ) {
		nodes.forEach( function ( node ) {
			$( node ).modal({
				show: false,
				focus: false
			});
		});
	}
};

/**
 * Wrapper to eliminate json errors
 * @param {string} str - JSON string
 * @returns {object} - parsed or empty object
 */
function parseJSON ( str ) {
	try {
		if ( str )  return JSON.parse( str );
		else return {};
	} catch ( error ) {
		return {};
	}
}

/**
 * Returns version of IE or false, if browser is not Internet Explorer
 * @see {@link https://gist.github.com/gaboratorium/25f08b76eb82b1e7b91b01a0448f8b1d}
 * @returns {number|boolean}
 */
function detectIE () {
	let
		ua = window.navigator.userAgent,
		msie = ua.indexOf( 'MSIE ' ),
		trident = ua.indexOf( 'Trident/' ),
		edge = ua.indexOf( 'Edge/' );

	if ( msie > 0 ) {
		return parseInt( ua.substring( msie + 5, ua.indexOf( '.', msie ) ), 10 );
	}

	if ( trident > 0 ) {
		let rv = ua.indexOf( 'rv:' );
		return parseInt( ua.substring( rv + 3, ua.indexOf( '.', rv ) ), 10 );
	}

	if ( edge > 0 ) {
		return parseInt( ua.substring( edge + 5, ua.indexOf( '.', edge ) ), 10 );
	}

	return false;
}

// Main
window.addEventListener( 'load', function () {
	new ZemezCore({
		observeDOM: false,
		components: components
	});
});
