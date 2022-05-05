import {all, call} from 'redux-saga/effects'
import { categoriesSaga } from './categories/catgory.saga'

export function* rootSaga() {
    yield all([call(categoriesSaga)])
}