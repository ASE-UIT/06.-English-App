import { grammarApi } from "@/apis"
import { queryKeys } from "@/config"
import { useQuery } from "@tanstack/react-query"

export const useGrammar = () =>
  useQuery({
    queryKey: queryKeys.grammar.gen(),
    queryFn: () => grammarApi.getAllGrammar(),
    refetchOnMount: "always",
  })
