-- 1. Create the trigger function
CREATE OR REPLACE FUNCTION notify_new_notification()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM pg_notify('new_notification_channel', row_to_json(NEW)::text);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 2. Create the trigger
CREATE TRIGGER on_new_notification
AFTER INSERT ON "Notification"
FOR EACH ROW
EXECUTE FUNCTION notify_new_notification();
