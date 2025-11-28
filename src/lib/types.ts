export interface SpotifyImage {
    url: string;
    height: number;
    width: number;
}

export interface SpotifyArtist{
    name: string;
    externalUrls: {
        spotify: string;
    };
}

export interface SpotifyAlbum {
    name: string;
    images: SpotifyImage[];
}

export interface SpotifyTrack {
    id: string;
    name: string;
    artists: SpotifyArtist[];
    album: SpotifyAlbum;
    externalUrls: {
        spotify: string;
    };
}

export interface SpotifyTopTrackResponse {
    items: SpotifyTrack[];
}