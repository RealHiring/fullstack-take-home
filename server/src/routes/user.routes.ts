import { Router } from 'express';
import { UserService } from '../services/user.service';

export const UserRoutes = () => {
	const router = Router();
	const userService = new UserService();

	router.get('/', async (req, res, next) => {
		const users = await userService.all();
		res.status(200).json(users);
	});

	router.post('/login', async (req, res, next) => {
		try {
			const user = await userService.findOrCreate(req.body);
			res.status(200).json({
				user,
			});
			next();
		} catch (err) {
			res.status(400).json({ message: 'BAD_REQUEST' });
			next();
		}
	});

	return router;
};
