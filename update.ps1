$ErrorActionPreference = "Stop"
try {
    $const = Get-Content constants.ts -Raw -Encoding UTF8
    $json = Get-Content newJsonDATE.txt -Raw -Encoding UTF8
    $marker = "export const MOCK_STORE_DATA: StoreHoursResponse[] = ["
    $index = $const.IndexOf($marker)
    if ($index -ge 0) {
        $header = $const.Substring(0, $index)
        $newContent = $header + "export const MOCK_STORE_DATA: StoreHoursResponse[] = " + $json.Trim() + ";"
        Set-Content constants.ts $newContent -Encoding UTF8
        Write-Host "Successfully updated constants.ts"
    } else {
        Write-Host "Marker not found in constants.ts"
        exit 1
    }
} catch {
    Write-Host "Error: $_"
    exit 1
}
