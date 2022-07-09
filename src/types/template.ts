type BlockTemplate = {
  type: string;
  settings?: { [key: string]: any };
};
type SectionTemplate = {
  type: string;
  disabled?: boolean;
  settings?: { [key: string]: any };
  blocks?: { [key: string]: BlockTemplate };
  block_order?: string[];
};
export type TemplateSchema = {
  layout?: string | false;
  name?: string;
  wrapper?: string;
  order: string[];
  sections: { [key: string]: SectionTemplate };
};
