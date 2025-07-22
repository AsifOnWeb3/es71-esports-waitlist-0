/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (bigint, primary key, auto-increment)
      - `email` (text, unique, not null)
      - `position` (integer, not null)
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for public insert access
    - Add policy for authenticated users to read data

  3. Notes
    - Position counter starts from 1500
    - Emails must be unique
    - Auto-increment position for each new entry
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id bigserial PRIMARY KEY,
  email text UNIQUE NOT NULL,
  position integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow public to insert new waitlist entries
CREATE POLICY "Allow public to insert waitlist entries"
  ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow public to read waitlist entries (for position checking)
CREATE POLICY "Allow public to read waitlist entries"
  ON waitlist
  FOR SELECT
  TO public
  USING (true);

-- Function to get next position starting from 1500
CREATE OR REPLACE FUNCTION get_next_waitlist_position()
RETURNS integer AS $$
DECLARE
  next_pos integer;
BEGIN
  SELECT COALESCE(MAX(position), 1499) + 1 INTO next_pos FROM waitlist;
  RETURN next_pos;
END;
$$ LANGUAGE plpgsql;