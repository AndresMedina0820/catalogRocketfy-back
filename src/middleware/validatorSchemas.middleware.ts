import boom from '@hapi/boom';

export const validatorHandler = (schema: any, property: string) => {
	return (_req: any, res: any, next: any) => {
		const data = _req[property];
		const { error } = schema.validate(data, { abortEarly: false });
		if (error) {
      next(boom.badRequest(error));
		}
		next();
	}
}
