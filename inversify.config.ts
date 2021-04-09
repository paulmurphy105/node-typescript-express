
import { Container } from "inversify";
import { TYPES } from "./types";
import { FetchAdapterInterface } from "./common/interfaces/fetchadapter.interface";
import { FetchAdapter } from "./common/adapters/fetch.adapter";

const DIContainer = new Container();

DIContainer.bind<FetchAdapterInterface>(TYPES.FetchAdapterInterface).to(FetchAdapter);

export { DIContainer };