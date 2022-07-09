import type { InputSetting, Setting } from './setting-schema';

type PageType =
  | '404'
  | 'article'
  | 'blog'
  | 'cart'
  | 'collection'
  | 'list-collections'
  | 'customers/account'
  | 'customers/activate_account'
  | 'customers/addresses'
  | 'customers/login'
  | 'customers/order'
  | 'customers/register'
  | 'customers/reset_password'
  | 'gift_card'
  | 'index'
  | 'page'
  | 'password'
  | 'policy'
  | 'product'
  | 'search';
type Preset = {
  name: string;
  settings?: { [key: string]: any };
  blocks?: { [key: string]: any }[];
};

type Block = {
  name: string;
  type: string;
  limit?: number;
  settings?: Setting[];
};

export type SectionSchema = {
  name: string;
  tag: string;
  class?: string;
  limit?: number;
  settings?: InputSetting[];
  blocks?: Block[];
  max_blocks?: number;
  presets?: Preset[];
  default?: any;
  locales?: any;
  templates?: PageType[];
};
