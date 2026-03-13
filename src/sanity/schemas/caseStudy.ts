import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: 'language', title: 'Language', type: 'string', options: { list: [{ title: 'Svenska', value: 'sv' }, { title: 'English', value: 'en' }, { title: 'Norsk', value: 'no' }] }, initialValue: 'sv' }),
    defineField({ name: 'client', title: 'Client', type: 'string' }),
    defineField({ name: 'industry', title: 'Industry', type: 'string' }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'challenge', title: 'Challenge', type: 'text', rows: 4 }),
    defineField({ name: 'solution', title: 'Solution / Approach', type: 'text', rows: 4 }),
    defineField({ name: 'results', title: 'Results', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'testimonial', title: 'Testimonial', type: 'text', rows: 3 }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
    defineField({ name: 'image', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'client', media: 'image' },
  },
});
