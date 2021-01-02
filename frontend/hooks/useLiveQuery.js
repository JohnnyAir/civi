import { liveQuery } from "dexie";
import { useSubscription } from "./useSubscription";
import { useMemo, useState } from "react";

export function useLiveQuery(querier, dependencies, defaultResult) {
  if (typeof window === "undefined") return;
  const [lastResult, setLastResult] = useState(defaultResult);

  const subscription = useMemo(
    () => {
      let currentValue = lastResult;
      const observable = liveQuery(querier);
      return {
        getCurrentValue: () => currentValue,
        subscribe: (onNext, onError) => {
          const esSubscription = observable.subscribe((value) => {
            currentValue = value;
            setLastResult(value);
            onNext(value);
          }, onError);
          return esSubscription.unsubscribe.bind(esSubscription);
        },
      };
    },

    dependencies || []
  );

  const value = useSubscription(subscription);
  return value;
}
