import type { Validator } from './validator.js';

export function email(): Validator {
	return (value: any) => {
		const regex = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,63}$/;
		return { valid: Boolean(value) && regex.test(value), name: 'not_an_email' };
	};
}
