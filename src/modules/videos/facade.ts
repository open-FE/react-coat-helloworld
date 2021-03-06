import {ListSearch} from "entity/video";
import {ModuleNames} from "modules/names";
import {exportModule} from "react-coat";
import {ModuleActions, State} from "./model";

export type ModuleState = State;

export default exportModule<ModuleActions>(ModuleNames.videos);

export const defaultListSearch: ListSearch = {
  title: "",
  page: 1,
  pageSize: 10,
};
