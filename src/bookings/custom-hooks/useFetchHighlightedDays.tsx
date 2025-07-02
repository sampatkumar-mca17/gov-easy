import type { Dayjs } from "dayjs";
import { useState } from "react";
import fakeFetch from "../services/api.service";
import React from "react";

function useFetchHighlightedDays() {
    const [highlightedDays, setHighlightedDays] = useState<number[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const fetchHighlightedDays = (date: Dayjs, requestAbortController: React.RefObject<AbortController | null>) => {
        const controller = new AbortController();
        fakeFetch(date, {
          signal: controller.signal,
        })
          .then(({ daysToHighlight }) => {
            setHighlightedDays(daysToHighlight);
            setIsLoading(false);
          })
          .catch((error) => {
            setError(error.message);
            setIsLoading(false);
            // ignore the error if it's caused by `controller.abort`
            if (error.name !== 'AbortError') {
              throw error;
            }
          });
        requestAbortController.current = controller;
      };
    
    return { highlightedDays, isLoading, error, fetchHighlightedDays };
  }
  
  export default useFetchHighlightedDays;