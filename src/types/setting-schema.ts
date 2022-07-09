export type SettingSchema = {
  name?: string;
  settings?: Setting[];
  [key: string]: any;
}[];

export type Setting = InputSetting | SidebarSetting;

type InputSettingType =
  | 'checkbox'
  | 'number'
  | 'radio'
  | 'range'
  | 'select'
  | 'text'
  | 'textarea'
  | 'article'
  | 'blog'
  | 'collection'
  | 'collection_list'
  | 'color'
  | 'color_background'
  | 'font_picker'
  | 'html'
  | 'image_picker'
  | 'link_list'
  | 'liquid'
  | 'page'
  | 'product'
  | 'product_list'
  | 'richtext'
  | 'url'
  | 'video_url';
export type InputSetting = {
  type: InputSettingType;
  id: string;
  label: string;
  default?: any;
  info?: string;
};

type SidebarSettingType = 'header' | 'paragraph';

type SidebarSetting = {
  type: SidebarSettingType;
  content: string;
};
