import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwtUtility';

const checkUserAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: 'No token provided' });
    return;
  }

  const token = authHeader.split(' ')[1];
  const decoded = verifyToken(token);

  if (!decoded) {
    res.status(401).json({ message: 'Invalid token' });
    return;
  }

  next();
};

export default checkUserAuth;
