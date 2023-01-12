import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Product } from '../productModel';
import { ProductActions } from "../store/actions-types";

export interface ProductState extends EntityState<Product> {}

export const adapter = createEntityAdapter<Product>(); 

export const initialProductState = adapter.getInitialState();

export const productReducer = createReducer(
    initialProductState, 
    on(ProductActions.allProductLoaded, (state, action) => 
    adapter.setAll(action.products, state))
)

export const { selectAll } = adapter.getSelectors(); 