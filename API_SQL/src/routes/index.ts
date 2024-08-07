import { Router } from 'express';

import Paths from '../common/Paths';
import DatabaseRoutes from './DatabaseRoutes';
import TableRoutes from './TableRoutes';
import RangeeRoutes from './RangeeRoutes';
import ConsoleRoutes from './ConsoleRoutes';


// **** Variables **** //

const apiRouter = Router();


// **  DatabaseRouter ** //

const databaseRouter = Router();

databaseRouter.get(
  Paths.Database.Get,
  DatabaseRoutes.getAll,
);

// ** TableRouter ** //

const tableRouter = Router();

tableRouter.get(Paths.Table.Get, TableRoutes.getAll);

// ** RangeeRouter ** //

const rangeeRouter = Router();

rangeeRouter.get(Paths.Rangee.Get, RangeeRoutes.getAll);

// ** ConsoleRouter ** //

const consoleRouter = Router();

consoleRouter.post(Paths.Console.Post, ConsoleRoutes.executerRequete);


apiRouter.use(Paths.Database.Base, databaseRouter);
apiRouter.use(Paths.Table.Base, tableRouter);
apiRouter.use(Paths.Rangee.Base, rangeeRouter);
apiRouter.use(Paths.Console.Base, consoleRouter);



// **** Export default **** //

export default apiRouter;
