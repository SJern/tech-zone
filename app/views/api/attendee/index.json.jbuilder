json.array! @attendees do |attendee|
  json.id attendee.id
  json.event_id attendee.event_id
  json.name attendee.name
  json.bootcamp attendee.bootcamp
end
