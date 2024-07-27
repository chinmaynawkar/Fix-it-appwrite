import { IndexType } from 'node-appwrite';
import { db, questionsCollection } from '@/models/enums';
import { database } from './config';
import { Permission } from 'appwrite';

export default async function createQuestionCollection() {

  //create collection
  await database.createCollection(db, questionsCollection, questionsCollection, [
    Permission.read('any'),
    Permission.read('users'),
    Permission.create('users'),
    Permission.update('users'),
    Permission.delete('users'),
  ])
  console.log('Collection created successfully');

  //create attribute

  await Promise.all([
    database.createStringAttribute(db,questionsCollection,'title', 100, true),
    database.createStringAttribute(db,questionsCollection,'content', 10000, true),
    database.createStringAttribute(db,questionsCollection,'authorId', 50, true),
    database.createStringAttribute(db,questionsCollection,'tags', 50, true, undefined, true),
    database.createStringAttribute(db,questionsCollection,'attachmentId', 50, false),
  ]);
  console.log('Question Attributes created successfully');

  //create indexes
  await Promise.all([
    database.createIndex(
      db,
      questionsCollection,
      'title',
      IndexType.Fulltext,
      ['title'],
      ['asc']
    ),
    database.createIndex(
      db,
      questionsCollection,
      'content',
      IndexType.Fulltext,
      ['content'],
      ['asc']
    ),
  ])  ;
}

