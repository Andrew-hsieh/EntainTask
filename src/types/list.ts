import { boolean } from "yup";

export interface RaceSummaries {
  [key: string]: RaceSummary;
}

export interface RaceSummary {
  race_id: string;
  race_name: string;
  race_number: number;
  meeting_id: string;
  meeting_name: string;
  category_id: string;
  advertised_start: AdvertisedStart;
  race_form: RaceForm;
  venue_id: string;
  venue_name: string;
  venue_state: string;
  venue_country: string;
}

export interface AdvertisedStart {
    seconds: number;
  }

export interface RaceForm {
    distance: number;
    distance_type: DistanceType;
    distance_type_id: string;
    track_condition: TrackCondition;
    track_condition_id: string;
    weather: Weather;
    weather_id: string;
    race_comment: string;
    additional_data: string;
    generated: number;
    silk_base_url: string;
    race_comment_alternative: string;
  }

  export interface DistanceType {
    id: string;
    name: string;
    short_name: string;
  }
  
  export interface TrackCondition {
    id: string;
    name: string;
    short_name: string;
  }
  
  export interface Weather {
    id: string;
    name: string;
    short_name: string;
    icon_uri: string;
  }

export interface DataProps {
  nextToGoList: RaceSummary[] | [];
  toggleGreyhound: boolean,
  toggleHarness: boolean,
  toggleHorse: boolean,
}