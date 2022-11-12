---
layout: syllabus_page
title: Creating Idea model in app
date: 26th Sept, 2020 02:00:00
course: ruby-on-rails
parent: /ruby-on-rails/section-three/
tags:
 - model
 - rails-console
description: Creating Idea model in app
permalink: /ruby-on-rails/section-three/app-idea-model/
prev_link: /ruby-on-rails/section-three/app-skeleton/
next_link: /ruby-on-rails/section-three/app-idea-route/
disable_toc: true
comments: true
---

# Creating Idea model in Rails

In this page, we will create the model of Idea resource for our application.

## Naming convention

Before jumping into building model, it is very important to understand the key part of Rails application
i.e __naming conventions__.

The naming conventions for model usually looks like:

| type | name |
| Model name | `idea` |
| File name | `idea.rb` |
| Class name | `Idea` |
| Table name | `ideas` |

## Model generator command

We will use the _Rails generator_ approach which is a handy tool to quickly generate rails components like models, views, controllers, migrations etc.

```shell
$ rails g model idea title:string description:text
Running via Spring preloader in process 8326
      invoke  active_record
      create    db/migrate/20200926011440_create_ideas.rb
      create    app/models/idea.rb
      invoke    test_unit
      create      test/models/idea_test.rb
      create      test/fixtures/ideas.yml
```

__NOTE:__ We can individually create migration, model and test files.

# Running migration

Now, run the migration command to run above migration.

```shell
$ rails db:migrate
== 20200926011440 CreateIdeas: migrating ======================================
-- create_table(:ideas)
   -> 0.0032s
== 20200926011440 CreateIdeas: migrated (0.0032s) =============================
```

## Migration file

Now, if you open the `db/migrate/XXXX_create_ideas.rb` you will be able to see following:

```ruby
class CreateIdeas < ActiveRecord::Migration[6.0]
  def change
    create_table :ideas do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
```

It basically means that create a table with name `ideas` in the database with two columns `title` of type `string` datatype and `description` of `text` datatype.

{% include util/note.html
    note="Notice, how Rails is using <em>Convention over Configuration</em> approach to assume name for table as plural of the name given during the generator command."
%}

## Schema file

A schema is basically the skeleton structure which represents the logical view of the database. It tells how the data is organized and how the relations among them are associated.

Rails store schema file at the location `db/schema.rb`.

The content after above model generation is:

```ruby
ActiveRecord::Schema.define(version: 2020_09_26_011440) do

  create_table "ideas", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
```

This clearly explains that there is a table with name `ideas` with `title`, `description`, `created_at` and `updated_at` as its columns.

Check [Rails Guides on active record](https://edgeguides.rubyonrails.org/active_record_basics.html){:target="_blank"} for in-depth understanding.

## Model and Rails console

Rails provides a nice command-line interface to rapidly interact with parts of your application through `rails console` without
going through a browser. As a Rails developer, you will spend a lot of time in the Rails console either trying many application specific commands or creating a test resource etc.

To get start with Rails console, type the following command:

```shell
$ cd ideastore    # you need to be inside application directory
$ rails console   # or just rails c
Running via Spring preloader in process 5806
Loading development environment (Rails 6.0.3.3)
2.7.1 :001 >
```

### Play around with rails command

Try following commands in the rails console to get familiar with it:

### Listing all record

```shell
2.7.1 :001 > Idea.all
    (0.4ms)  SELECT sqlite_version(*)
  Idea Load (0.2ms)  SELECT "ideas".* FROM "ideas" LIMIT ?  [["LIMIT", 11]]
  => #<ActiveRecord::Relation []>
```

The above command (`Idea.all`) it get the list of all ideas within the application.
You can notice that this has generated a SQL query, `SELECT "ideas".* FROM "ideas" LIMIT ?  [["LIMIT", 11]]` and the response is the empty collection `[]` of type `ActiveRecord::Relation`.

This means that the connections are working between Model and Database.

### Creating a record

Since, we don't have any idea in our database let's go ahead and create one.

#### 1. Using Idea#create method

```shell
2.7.1 :002 > Idea.create(title: 'first idea', description: 'first idea description')
   (0.1ms)  begin transaction
  Idea Create (0.6ms)  INSERT INTO "ideas" ("title", "description", "created_at", "updated_at") VALUES (?, ?, ?, ?)  [["title", "first idea"], ["description", "first idea description"], ["created_at", "2020-09-27 07:26:00.967257"], ["updated_at", "2020-09-27 07:26:00.967257"]]
   (1.3ms)  commit transaction
 => #<Idea id: 1, title: "first idea", description: "first idea description", created_at: "2020-09-27 07:26:00", updated_at: "2020-09-27 07:26:00">

# Total ideas
2.7.1 :010 > Idea.count
   (0.2ms)  SELECT COUNT(*) FROM "ideas"
 => 1
```

#### 2. Using Idea#new and Idea#save

```shell
2.7.1 :006 > idea = Idea.new
2.7.1 :007 > idea.title = 'second idea'
2.7.1 :008 > idea.description = 'second description'
2.7.1 :009 > idea.save
   (0.1ms)  begin transaction
  Idea Create (0.4ms)  INSERT INTO "ideas" ("title", "description", "created_at", "updated_at") VALUES (?, ?, ?, ?)  [["title", "second idea"], ["description", "second description"], ["created_at", "2020-09-27 07:28:03.793033"], ["updated_at", "2020-09-27 07:28:03.793033"]]
   (1.6ms)  commit transaction
 => true

# Total ideas
2.7.1 :010 > Idea.count
   (0.2ms)  SELECT COUNT(*) FROM "ideas"
 => 2
```

#### 3. Using Idea#new with params then Idea#save

```shell
2.7.1 :011 > idea = Idea.new(title: 'third idea', description: 'third description')
2.7.1 :012 > idea.save
   (0.1ms)  begin transaction
  Idea Create (0.5ms)  INSERT INTO "ideas" ("title", "description", "created_at", "updated_at") VALUES (?, ?, ?, ?)  [["title", "third idea"], ["description", "third description"], ["created_at", "2020-09-27 07:30:50.596950"], ["updated_at", "2020-09-27 07:30:50.596950"]]
   (1.5ms)  commit transaction
 => true

2.7.1 :015 > Idea.count
   (0.2ms)  SELECT COUNT(*) FROM "ideas"
 => 3
```

Now list of all ideas will give all three ideas:

```shell
2.7.1 :016 > Idea.all
  Idea Load (0.2ms)  SELECT "ideas".* FROM "ideas" LIMIT ?  [["LIMIT", 11]]
 => #<ActiveRecord::Relation [#<Idea id: 1, title: "first idea", description: "first idea description", created_at: "2020-09-27 07:26:00", updated_at: "2020-09-27 07:26:00">, #<Idea id: 2, title: "second idea", description: "second description", created_at: "2020-09-27 07:28:03", updated_at: "2020-09-27 07:28:03">, #<Idea id: 3, title: "third idea", description: "third description", created_at: "2020-09-27 07:30:50", updated_at: "2020-09-27 07:30:50">]>
```

{% include util/note.html
    note="Rails statements like 'Idea.create', 'idea.save', 'Idea.all' and 'Idea.count' will interact with database through SQL query. If the transaction involves create, delete or update operation, then same changes get updated into database. Be careful, when using these mutating rails statements." type="caution"
%}
