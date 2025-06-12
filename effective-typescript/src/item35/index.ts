// ## Item 35: Prefer More Precise Alternatives to String Types

namespace Item35 {
    type RecordingType = 'studio' | 'live';
    interface Album {
        artist: string;
        title: string;
        releaseDate: Date;
        recordingType: RecordingType;
        members: number;
    }
    const albums: Album[] = [];

    // return type: T[keyof T][]
    function pluck<T>(records: T[], key: keyof T) {
        return records.map(r => r[key]);
    }    
    const releaseDates = pluck(albums, 'releaseDate');  // (string | Date)[] <-- must narrowing the return type
    const artists = pluckNarrow(albums, 'artist');      // string[]
    const members = pluckNarrow(albums, 'members');     // number[]

    // update parameters and add a subtype K extends of keyof T to narrow down the return type
    // NB: zelfs zie ik K als helper type!
    // return type: T[K][]
    function pluckNarrow<T, K extends keyof T>(records: T[], key: K) {
        return records.map(r => r[key]);
    }    
    const releaseDatesNarrowed = pluckNarrow(albums, 'releaseDate');    // Date[]
    const artistsNarrowed = pluckNarrow(albums, 'artist');              // string[]
    const recordingTypesNarrowed = pluckNarrow(albums, 'recordingType');// RecordingType[]   
    const membersNarrowed = pluckNarrow(albums, 'members');             // number[]
    const membersReleaseDate = pluckNarrow(albums, Math.random() < 0.5 ? 'members' : 'releaseDate');
    //      ^ OK --- return type: (number | Date)[]

}