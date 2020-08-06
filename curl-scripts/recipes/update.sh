API="http://localhost:4741"
URL_PATH="/recipes"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "recipe": {
    "batchSize": "'"${SIZE}"'",
    "grainBill": "'"${GRAINS}"'",
    "hopProfile": "'"${HOPS}"'",
    "hopSchedule": "'"${HOPADDS}"'",
    "dryHop": "'"${DRYHOP}"'",
    "yeast": "'"${YEAST}"'",
    "directions": "'"${DIRECTIONS}"'",
    "note": "'"${NOTE}"'"
  }
}'

echo
