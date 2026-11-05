/* Supabase > Project Settings > API dan oling (anon/public kalit). service_role kalitni QOYMANG! */
var SUPABASE_URL = "https://ghdvktiszzmnyciehbhb.supabase.co";
var SUPABASE_KEY = "sb_publishable_QGzBEKo6JAIP3c5Ksl3wsg_wFZgrIud";
var sb;
if (!window.supabase) {
  alert("Supabase kutubxonasi yuklanmadi. Internetni tekshiring.");
} else {
  try { sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY); }
  catch (e) { alert("supabase-config.js xato: " + e.message); }
}
