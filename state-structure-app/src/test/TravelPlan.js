import { useState } from "react";
import { initialTravelPlan } from "./Places";
import PlaceTree from "./PlaceTree";

export default function TravelPlan() {
  const [plan, setPlan] = useState(
    initialTravelPlan
  );

  function handleComplete(parentId, childId) {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter(
        (id) => id !== childId
      ),
    };
    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  }
  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>여행 장소</h2>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
}
