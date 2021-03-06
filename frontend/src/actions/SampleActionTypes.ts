export const SAMPLE_LOADING = "SAMPLE_LOADING";
export const SAMPLE_FAIL = "SAMPLE_FAIL";
export const SAMPLE_SUCCESS = "SAMPLE_SUCCESS";

export type SampleType = {
  message: string
}




export type SampleStat = {
  base_stat: number,
  stat: {
    name: string
  }
}

export interface SampleLoading {
  type: typeof SAMPLE_LOADING
}

export interface SampleFail {
  type: typeof SAMPLE_FAIL
}

export interface SampleSuccess {
  type: typeof SAMPLE_SUCCESS,
  payload: SampleType
}

export type SampleDispatchTypes = SampleLoading | SampleFail | SampleSuccess