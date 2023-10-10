export const boomErrorHandler =(err: any, _req: any, res: any, next: any) => {
	if (err.isBoom) {
		const { statusCode, payload } = err.output;
		res.status(statusCode).json(payload);
    return;
	}
	next(err);
}

export const errorHandler =(err: any, _req: any, res: any, next: any) => {
	res.status(500).json({
		message: err.message,
		stack: err.stack
	});
}
