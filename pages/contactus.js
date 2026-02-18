import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';

import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { IconContext } from 'react-icons';

const Contact = () => {
	const [newContact, setNewContact] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null },
	});

	const handleChange = (e) => {
		setNewContact({
			...newContact,
			[e.target.name]: e.target.value,
		});
		setStatus({
			submitted: false,
			submitting: false,
			info: { error: false, msg: null },
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
		fetch('/api/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newContact),
		})
			.then((res) => {
				if (res.status === 200) {
					setNewContact({ name: '', email: '', message: '' });
				}
				handleResponse(res.status, res.status === 200 ? 'Thanks For Your Interest, Please Allow Time For Our Response' : 'Something went wrong. Please try again.');
			})
			.catch(() => {
				setStatus({
					submitted: true,
					submitting: false,
					info: { error: true, msg: 'Failed to send. Please try again or email us directly.' },
				});
			});
	};

	const handleResponse = (statusCode, msg) => {
		setStatus({
			submitted: true,
			submitting: false,
			info: { error: statusCode !== 200, msg },
		});
	};

	function showHideDiv(id) {
		var x = document.getElementById(id).style;

		if (x.display == null || x.display == 'none') {
			x.display = 'block';
			setExpand(true);
		} else {
			x.display = 'none';
			setExpand(false);
		}
	}

	// this changes the icon to the right of the FAQ when clicked
	const [expand, setExpand] = useState(false);

	return (
		<div>
			<Head>
				<meta name='description' content='Ready for a new floor? Contact us today for a quote.' />
				<meta
					name='keywords'
					content='flooring company, flooring, floor, floor covering, lay out, house, renovation'
				/>

				<link rel='apple-touch-icon' sizes='180x180' href='/favicon_package/apple-touch-icon.ico' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon_package/favicon-32x32.ico' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon_package/favicon-16x16.ico' />
				<link rel='manifest' href='/favicon_package/site.webmanifest' />
				<link rel='mask-icon' href='/favicon_package/safari-pinned-tab.svg' color='#5bbad5' />
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff' />
				<title>Contact Us - Request A Quote</title>
			</Head>
			<div className='contact'>
				<div className='contact__hero-section'>
				<h1>Ready to work with Sequoiaie?</h1>
                    <p>
                        Whether you're interested in our tile solutions or agricultural exports, 
                        we're here to help. Contact us with your questions or requirements, and we'll get back to you within 24 hours.
                    </p>
				</div>
				<div className='contact__form-section'>
					<div className='contact__form-section-container'>
						<div className='contact__form-section-header'>
							<h2>Contact Us</h2>
							<p>Please send us your inquiries and we'll respond promptly.</p>
						</div>
						<form
							className='contact__form'
							name='Sequoiaie  Contact Inqueries'
							method='post'
							onSubmit={handleSubmit}>
							<input
								type='text'
								name='name'
								value={newContact.name}
								placeholder='Name'
								onChange={handleChange}></input>
							<input
								type='email'
								name='email'
								value={newContact.email}
								placeholder='Email'
								onChange={handleChange}></input>
							<textarea
								type='text'
								name='message'
								value={newContact.message}
								placeholder='Message'
								onChange={handleChange}></textarea>
							<button type='submit' onClick={handleSubmit} disabled={status.submitting}>
								{!status.submitting ? (!status.submitted ? 'Submit' : 'Submitted') : 'Submitting...'}
							</button>
						</form>
						{status.info.error ? (
							<div className='error'>Error: {status.info.msg}</div>
						) : (
							<div className='success'>{status.info.msg}</div>
						)}
					</div>
				</div>
			</div>
			<section className='faq'>
				<h1>Frequently Asked Questions (FAQ)</h1>
				<div className='faq__container'>
					<div className='faq__questions-container'>
						<div className='faq__questions' onClick={() => showHideDiv('answer1')}>
							<h1>How does your pricing work?</h1>
							<IconContext.Provider value={{ color: '#B9B3B3' }}>
								<div>{expand ? <BiMinus /> : <BsPlus />}</div>
							</IconContext.Provider>
						</div>
						<p id='answer1' className='faq__answers' style={{ display: 'none' }}>
                            We operate on a direct-from-manufacturer model that eliminates middlemen, allowing us to offer below-market 
                            pricing without compromising quality. We work with 15 manufacturing units and can fulfill large orders for 
                            residential, commercial, or infrastructure projects with guaranteed on-time delivery.
                        </p>
					</div>
					<div className='faq__questions-container'>
						<div className='faq__questions' onClick={() => showHideDiv('answer2')}>
						<h1>What agricultural products do you export?</h1>
							<IconContext.Provider value={{ color: '#B9B3B3' }}>
								<div>{expand ? <BiMinus /> : <BsPlus />}</div>
							</IconContext.Provider>
						</div>
						<p id='answer2' className='faq__answers' style={{ display: 'none' }}>
                            Our agricultural export range includes grains & cereals (rice, wheat, maize), pulses & lentils, 
                            spices (turmeric, cumin, coriander, etc.), fresh produce, processed foods, and oil seeds & nuts. 
                            All products are sourced directly from certified farms and processors with rigorous quality checks 
                            and reliable logistics.
                        </p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
