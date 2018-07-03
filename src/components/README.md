# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

Requirements
  1. App should have least five models.
  2. There should be at least twenty methods total in your models. These are to be used to better extract data from your tables. Think Flatiron BnB Lab
  3. No APIs until you get approval from an instructor.
  4. Specs - there should be at least 10 specs in your project (five per person).
  5. An analytics page - The main learning goal of this is to get you to write some interesting activerecord queries.
  6. No JavaScript. Stay focused on Rails for this project - we'll have plenty of time this semeseter to cover JS topics.

User
  1. I should be able to see all the artists and performances and their timeslots
  2. I should be able to filter on the stage to see all performances on that stage
  3. I should be able to make an itinerary
  4. I should be able to see my complete itinerary
  BONUS 1: I should be able to share my itinerary with my friends
  BONUS 2: My friends should be able to edit my itinerary

Venue
  1. I should be able to see all the attendees
  3. I should be able to see all the artists
  BONUS 1: I should be able to make an announcement to all users, i.e. weather announcement

Performance/Artist/Stage/Bookings
  1. Artist has a name
  2. Stage has a name and location
  3. Performance needs a time and duration(start time and end time), an artist, and a stage
  4. Booking needs to be able to join the user schedule with the performance, booking needs to prevent user from scheduling a booking if there is an overlap in performance time. Also it should show which performance is overlapping with so they can choose which performance to see.
  5. schedule is a collection of all the booking

To Do list
2. 10 specs - Billy


* ...
# Music_Festival_Manager
